import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneLaptop,
  faLongArrowAltRight,
} from '@fortawesome/pro-regular-svg-icons';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';

const ListItem = (props, key) => {
  const { title, desc, url, images, hasImage = true } = props;
  return (
    <li className="core-rules-list__item" key={key}>
      <Link to={url} aria-label={`Read ${title}`}>
        <div className="core-rules-list__item__content">
          <BookImage title={title} hasImage={hasImage} images={images} />
          <h3>
            {title} <FontAwesomeIcon icon={faLongArrowAltRight} />
          </h3>
          <p
            className={!desc ? 'hide' : ''}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      </Link>
    </li>
  );
};

const singleImage = (imageName, images) => {
  const haystack = images.filter((value) => value.node.name === imageName);
  return haystack[0].node.childImageSharp.fluid;
};

const BookImage = (props) => {
  const { title, hasImage, images } = props;
  if (hasImage === false) return;
  return (
    <Img
      className="core-rules-list__item__image"
      fluid={singleImage(
        `hero--${title
          .replace(/ /g, '-')
          .replace('&', 'and')
          .replace('#', '')
          .toLowerCase()}`,
        images
      )}
      alt={title}
    />
  );
};

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(
        filter: { relativeDirectory: { regex: "/landing-page-heroes/" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(base64Width: 10, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const images = data.images.edges;

  const toolkits = [
    {
      title: 'Fate System Toolkit',
      desc:
        'This toolkit <strong>includes many ideas</strong> that can be used wholesale or as inspiration for your own games.',
      url: '/fate-system-toolkit',
    },
    {
      title: 'Fate Adversary Toolkit',
      desc:
        'A great campaign needs opposition to create stirring conflict. <strong>Learn how to use high quality adversaries</strong> to drive your stories to completion.',
      url: '/fate-adversary-toolkit',
    },
  ];

  const fatebooks = [
    {
      title: 'Atomic Robo',
      desc:
        '<strong>Action! Science! Robots! Punching! More Science!</strong> Are you ready for some two-fisted science adventure?',
      url: '/atomic-robo',
    },
    {
      title: 'Venture City',
      desc:
        '<strong>A world of superpowers, villainous corporations, and ruthless gangs</strong>, set in a near-future where powers are for sale.',
      url: '/venture-city',
    },
    {
      title: 'War of Ashes',
      desc:
        'Head off to adventure in a world where the inhabitants might look cute and cuddly but often carry pointy objects with which <strong>they might just decide to stab you</strong>.',
      url: '/war-of-ashes',
    },
    {
      title: '#iHunt',
      desc: `<strong>#iHunt is a story telling game about killing monsters in the gig economy.</strong> A gig app called #iHunt offers them more money than you have ever made to hit the streets and kill monsters that go bump in the night. `,
      url: '/ihunt',
    },
  ];

  const woa = [
    {
      title: 'Frontier Spirit',
      desc:
        'Natural disasters, storms, subsistence, and even basic survival</strong> on an alien spirit world unused to coexisting with sentient creatures',
      url: '/frontier-spirit',
    },
    {
      title: 'Gods & Monsters',
      desc:
        'The world is young and majestic, and humans eke out a living and dream of civilization. <strong>But you are not like them: you are a god (or a monster).</strong>',
      url: '/gods-and-monsters',
    },
    {
      title: 'Sails Full of Stars',
      desc:
        '<strong>Track down pirates, brave the stars, and mount shipboard battles!</strong>',
      url: '/sails-full-of-stars',
    },
    {
      title: 'Three Rocketeers',
      desc:
        '<strong>All for one and one for all!</strong> No skill swashbuckling and conspiracies.',
      url: '/three-rocketeers',
    },
  ];

  // const fateCodex = [
  //   {
  //     title: 'Volume 1',
  //     desc: '',
  //     url: '/fate-codex/fate-codex-volume-1',
  //     hasImage: false,
  //   },
  //   {
  //     title: 'Volume 2',
  //     desc: '',
  //     url: '/fate-codex/fate-codex-volume-2',
  //     hasImage: false,
  //   },
  //   {
  //     title: 'Volume 3',
  //     desc: '',
  //     url: '/fate-codex/fate-codex-volume-3',
  //     hasImage: false,
  //   },
  // ];

  return (
    <Layout>
      <SEO title="Home" />
      <main
        className="main-content-wrapper"
        style={{ paddingBottom: '0', paddingTop: '0' }}
      >
        <div className="main-content main-content__home">
          <section className="section__fate-core">
            <h1 className="page-title">Fate Roleplaying Game</h1>
            <h2 style={{ marginBottom: '2rem' }}>
              System Reference Document (SRD)
            </h2>
            <ul className="core-rules-list">
              <li className="core-rules-list__item core-rules-list__item--space-above">
                <Link to="/fate-core" aria-label="Read Fate Core">
                  <div className="core-rules-list__item__content">
                    <Img
                      className="core-rules-list__item__image"
                      fluid={singleImage('hero--fate-core', images)}
                      key={
                        Date.now() +
                        Math.floor(Math.random() * Math.floor(500000000))
                      }
                      alt="Fate Core"
                    />
                    <div className="core-rules-list__overview core-rules-list__overview--core">
                      The whole system
                    </div>
                    <h3>
                      Fate Core <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </h3>
                    <p>
                      <strong>
                        Fate Core is a dynamic and flexible roleplaying game
                        built around proactive characters that you play.
                      </strong>{' '}
                      Fate Core does not have a default setting to encourage all
                      styles of play.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="core-rules-list__item core-rules-list__item--space-above">
                <Link to="/fate-accelerated" aria-label="Read Fate Accelerated">
                  <div className="core-rules-list__item__content">
                    <Img
                      className="core-rules-list__item__image"
                      fluid={singleImage('hero--fate-accelerated', images)}
                      key={
                        Date.now() +
                        Math.floor(Math.random() * Math.floor(500000000))
                      }
                      alt="Fate Accelerated"
                    />
                    <div className="core-rules-list__overview core-rules-list__overview--fae">
                      Get started quick!
                    </div>
                    <h3>
                      Fate Accelerated{' '}
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </h3>
                    <p>
                      <strong>
                        <abbr title="Fate Accelerated">FAE</abbr> is a grab-n-go
                        version of Fate
                      </strong>
                      , written for <strong>easy prep and easy play</strong>.
                      Don't let that simplicity fool you, use these rules to run
                      any style and any length campaign.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="core-rules-list__item core-rules-list__item--space-above">
                <Link to="/fate-condensed" aria-label="Read Fate Condensed">
                  <div className="core-rules-list__item__content">
                    <Img
                      className="core-rules-list__item__image"
                      fluid={singleImage('hero--fate-condensed', images)}
                      key={
                        Date.now() +
                        Math.floor(Math.random() * Math.floor(500000000))
                      }
                      alt="Fate Condensed"
                    />
                    <div className="core-rules-list__overview core-rules-list__overview--condensed">
                      Compact version of Core
                    </div>
                    <h3>
                      Fate Condensed{' '}
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </h3>
                    <p>
                      <strong>
                        Fate Condensed is a version of Fate Core System in a
                        compact form.
                      </strong>{' '}
                      It is a complete roleplaying game; while other books might
                      enhance your use of it, you don’t need any other book to
                      play.
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </section>

          <section className="section__more-fate section__more-fate--playing-online">
            <div className="content">
              <h2>
                <FontAwesomeIcon icon={faPhoneLaptop} /> Playing Fate Online
              </h2>
              <p>Get tips and tricks for taking your Fate RPG game online.</p>
              <Link to="playing-fate-online" className="playing-button">
                Tips for Playing Fate Online
              </Link>
            </div>
            <Img
              key="playing-online"
              className="playing-online"
              fluid={singleImage('play-online', images)}
              alt="Playing Fate Online"
            />
          </section>

          <section className="section__more-fate">
            <h2>Toolkit SRDs</h2>
            <ul className="core-rules-list core-rules-list--2up">
              {toolkits.map((v) => (
                <ListItem
                  key={
                    Date.now() +
                    Math.floor(Math.random() * Math.floor(500000000))
                  }
                  title={v.title}
                  desc={v.desc}
                  url={v.url}
                  images={images}
                />
              ))}
            </ul>
          </section>

          <section className="section__more-fate section__more-fate--lightBlue">
            <h2>Fate World Book SRDs</h2>
            <ul className="core-rules-list core-rules-list--2up">
              {fatebooks.map((v) => (
                <ListItem
                  key={
                    Date.now() +
                    Math.floor(Math.random() * Math.floor(500000000))
                  }
                  title={v.title}
                  desc={v.desc}
                  url={v.url}
                  images={images}
                />
              ))}
            </ul>
          </section>

          <section className="section__more-fate last">
            <h2>Worlds of Adventure SRDs</h2>
            <ul className="core-rules-list core-rules-list--2up">
              {woa.map((v) => (
                <ListItem
                  key={
                    Date.now() +
                    Math.floor(Math.random() * Math.floor(500000000))
                  }
                  title={v.title}
                  desc={v.desc}
                  url={v.url}
                  images={images}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
  hasImage: PropTypes.bool,
  images: PropTypes.any,
};

BookImage.propTypes = {
  title: PropTypes.string,
  hasImage: PropTypes.bool,
  images: PropTypes.any,
};

export default Home;
