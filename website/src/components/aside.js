// import { Link } from "gatsby"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Menu from "./menu"

class Aside extends React.Component {
  componentDidMount() {
    const context = document
    /**
     * Small screen functionality.
     */
    const navInPage = context.querySelector(".nav-in-page")
    const mobileToggle = context.querySelector(".nav-in-page__mobile-toggle")
    const body = context.querySelector("body")

    const handleNavInPage = () => {
      navInPage.classList.toggle("nav-in-page--open")
      body.classList.toggle("noscroll")
    }

    mobileToggle.addEventListener("click", handleNavInPage)

    /**
     * Large screen functionality
     */
    const sectionToggleButtons = Array.from(
      document.querySelectorAll(".nav-in-page__show-menu") 
    )

    const handleSectionToggleButton = function () {
      if (this.getAttribute("aria-expanded") === "true") {
        this.setAttribute("aria-expanded", "false")
      } else {
        this.setAttribute("aria-expanded", "true")
      }
    }

    sectionToggleButtons.forEach(item =>
      item.addEventListener("click", handleSectionToggleButton)
    )
  }

  render() {
    const menu = this.props.ruleBook.toLowerCase().split(" ").join("-");
    return (
      <nav className="nav-in-page">
        <h1 className="nav-in-page__title nav-in-page__mobile-toggle">
          <span>
            <i className="far fa-bars"></i>
            <i className="far fa-times"></i>
          </span>
          {this.props.ruleBook}
        </h1>
        <div className="nav-in-page__content">
          <Menu menuName={`menu-${menu}`} classBase="nav-in-page" />
          <div className="nav-in-page__about">
            {/* <img src= alt="" className="nav-in-page__about__image" /> */}

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
              render={data => {
                const searchTerm = `menu-${menu}`
                const image = data.images.edges.find(needle => {
                  return needle.node.name.includes(searchTerm);
                });
                if (!image) {
                  return null;
                }
                return <Img fixed={image.node.childImageSharp.fixed} className="nav-in-page__about__image" /> 
              }}
            />

            <h2 className="nav-in-page__about__header">Where to Buy</h2>
            <ul className="nav-in-page__about__ul">
              <li className="nav-in-page__about__li">
                <a href="/#" className="nav-in-page__about__link">
                  {/* <img src={{ buyEh }} alt="" /> */}
                </a>
              </li>
              <li className="nav-in-page__about__li">
                <a href="/#" className="nav-in-page__about__link">
                  {/* <img src={{ buyDtr }} alt="" /> */}
                </a>
              </li>
              <li className="nav-in-page__about__li">
                <a href="/#" className="nav-in-page__about__link">
                  {/* <img src={{ buyItch }} alt="" /> */}
                </a>
              </li>
            </ul>
            <h2 className="nav-in-page__about__header">Author(s):</h2>
            <p>
              Amanda Valentine, Clark Valentine, Fred Hicks, Leonard Balsera
            </p>
          </div>
        </div>
      </nav>
    )
  }
}

export default Aside
