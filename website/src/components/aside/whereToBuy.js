import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const WhereToBuy = (props) => {
  const books = {
    'fate-core': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=advanced_search_result&keyword=fate+core&categories_id=&inc_subcat=1&manufacturers_id=&pfrom=&pto=&dfrom=&dto=&x=29&y=13',
      dtr:
        'https://www.drivethrurpg.com/product/114903/Fate-Core-System?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-core',
    },
    'fate-accelerated': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=advanced_search_result&keyword=fate+core&categories_id=&inc_subcat=1&manufacturers_id=&pfrom=&pto=&dfrom=&dto=&x=29&y=13https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=222',
      dtr:
        'https://www.drivethrurpg.com/product/114902/Fate-Accelerated-Edition-o-A-Fate-Core-Build?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-accelerated',
    },
    'fate-condensed': {
      eh: '',
      dtr:
        'https://www.drivethrurpg.com/product/302571/Fate-Condensed?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-condensed',
    },
    'fate-system-toolkit': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=243',
      dtr:
        'https://www.drivethrurpg.com/product/119385/Fate-System-Toolkit?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-system-toolkit',
    },
    'fate-adversary-toolkit': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=328',
      dtr:
        'https://www.drivethrurpg.com/product/219203/Fate-Adversary-Toolkit?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-adversary-toolkit',
    },
    'atomic-robo': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=254',
      dtr:
        'https://www.drivethrurpg.com/product/130204/Atomic-Robo-RPG?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/atomic-robo-the-roleplaying-game',
    },
    'frontier-spirit': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=307',
      dtr:
        'https://www.drivethrurpg.com/product/161674/Frontier-Spirit-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch:
        'https://evilhat.itch.io/frontier-spirit-a-world-of-adventure-for-fate-core',
    },
    'gods-and-monsters': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=307',
      dtr:
        'https://www.drivethrurpg.com/product/150889/Gods-and-Monsters-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch:
        'https://evilhat.itch.io/gods-and-monsters-a-world-of-adventure-for-fate-core',
    },
    'sails-full-of-stars': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=307',
      dtr:
        'https://www.drivethrurpg.com/product/150022/Sails-Full-of-Stars-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch:
        'https://evilhat.itch.io/sails-full-of-stars-a-world-of-adventure-for-fate-core',
    },
    'three-rocketeers': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=307',
      dtr:
        'https://www.drivethrurpg.com/product/166281/The-Three-Rocketeers-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch:
        'https://evilhat.itch.io/the-three-rocketeers-a-world-of-adventure-for-fate-core',
    },
    'war-of-ashes': {
      eh:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=291',
      dtr:
        'https://www.drivethrurpg.com/product/157134/War-of-Ashes-Fate-of-Agaptus?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/war-of-ashes-fate-of-agaptus',
    },
  };
  const { value } = props;

  const buyImages = useStaticQuery(graphql`
    {
      dtr: file(name: { eq: "buy--dtr" }) {
        childImageSharp {
          fixed(width: 200, jpegQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      eh: file(name: { eq: "buy--eh" }) {
        childImageSharp {
          fixed(width: 200, jpegQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      itch: file(name: { eq: "buy--itch" }) {
        childImageSharp {
          fixed(width: 200, jpegQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (books[value] == null) return false;

  return (
    <section>
      <h2 className="nav-in-page__about__header">Where to Buy</h2>
      <ul className="nav-in-page__about__ul">
        <li className="nav-in-page__about__li">
          <a href={books[value].eh} className="nav-in-page__about__link">
            <Img
              fixed={buyImages.eh.childImageSharp.fixed}
              alt="Evil Hat Store"
            />
          </a>
        </li>
        <li className="nav-in-page__about__li">
          <a href={books[value].dtr} className="nav-in-page__about__link">
            <Img
              fixed={buyImages.dtr.childImageSharp.fixed}
              alt="Evil Hat DriveThruRPG Store"
            />
          </a>
        </li>
        <li className="nav-in-page__about__li">
          <a href={books[value].itch} className="nav-in-page__about__link">
            <Img
              fixed={buyImages.itch.childImageSharp.fixed}
              alt="Evil Hat Itch.io Store"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

WhereToBuy.propTypes = {
  value: PropTypes.string,
};

export default WhereToBuy;
