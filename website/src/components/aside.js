import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/pro-regular-svg-icons';
import Menu from './menu';
import WhereToBuy from './aside/whereToBuy';
import AuthorList from './aside/AuthorList';

class Aside extends React.Component {
  componentDidMount() {
    const context = document;
    /**
     * Small screen functionality.
     */
    const navInPage = context.querySelector('.nav-in-page');
    const mobileToggle = context.querySelector('.nav-in-page__mobile-toggle');
    const body = context.querySelector('body');

    const handleNavInPage = () => {
      navInPage.classList.toggle('nav-in-page--open');
      body.classList.toggle('noscroll');
    };

    mobileToggle.addEventListener('click', handleNavInPage);

    /**
     * Large screen functionality
     */
    const sectionToggleButtons = Array.from(
      document.querySelectorAll('.nav-in-page__show-menu')
    );

    const handleSectionToggleButton = function () {
      if (this.getAttribute('aria-expanded') === 'true') {
        this.setAttribute('aria-expanded', 'false');
      } else {
        this.setAttribute('aria-expanded', 'true');
      }
    };

    sectionToggleButtons.forEach((item) =>
      item.addEventListener('click', handleSectionToggleButton)
    );
  }

  render() {
    const { ruleBook, authorlist } = this.props;
    const menu = ruleBook.toLowerCase().split(' ').join('-');
    return (
      <nav className="nav-in-page">
        <h1 className="nav-in-page__title nav-in-page__mobile-toggle">
          <span>
            <FontAwesomeIcon icon={faBars} className="bars" />
            <FontAwesomeIcon icon={faTimes} className="times" />
          </span>
          {ruleBook}
        </h1>
        <div className="nav-in-page__content">
          <Menu menuName={`menu-${menu}`} classBase="nav-in-page" />
          <div className="nav-in-page__about">
            <StaticQuery
              query={graphql`
                query {
                  images: allFile {
                    edges {
                      node {
                        relativePath
                        name
                        childImageSharp {
                          fixed(width: 200, jpegQuality: 100) {
                            ...GatsbyImageSharpFixed
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={(data) => {
                const searchTerm = `menu-${menu}`;
                const image = data.images.edges.find((needle) =>
                  needle.node.name.includes(searchTerm)
                );
                if (!image) {
                  return null;
                }
                return (
                  <Img
                    fixed={image.node.childImageSharp.fixed}
                    className="nav-in-page__about__image"
                  />
                );
              }}
            />
            <WhereToBuy value={menu} />
            <AuthorList authorlist={authorlist} />
          </div>
        </div>
      </nav>
    );
  }
}

Aside.propTypes = {
  ruleBook: PropTypes.string,
  authorlist: PropTypes.array,
};

export default Aside;
