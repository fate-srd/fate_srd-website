import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const storeAltText = {
  direct: 'Buy Directly from the Publisher',
  dtr: 'Buy from DriveThruRPG',
  itch: 'Buy from Itch.io',
};

const ListItem = ({ url, image, altText }) => (
  <li className="nav-in-page__about__li">
    <a href={url} className="nav-in-page__about__link">
      <Img fixed={image.childImageSharp.fixed} alt={altText} />
    </a>
  </li>
);

const WhereToBuy = (props) => {
  const books = {
    'fate-core': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=advanced_search_result&keyword=fate+core&categories_id=&inc_subcat=1&manufacturers_id=&pfrom=&pto=&dfrom=&dto=&x=29&y=13',
      dtr:
        'https://www.drivethrurpg.com/product/114903/Fate-Core-System?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-core',
    },
    'fate-accelerated': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=advanced_search_result&keyword=fate+core&categories_id=&inc_subcat=1&manufacturers_id=&pfrom=&pto=&dfrom=&dto=&x=29&y=13https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=222',
      dtr:
        'https://www.drivethrurpg.com/product/114902/Fate-Accelerated-Edition-o-A-Fate-Core-Build?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-accelerated',
    },
    'fate-condensed': {
      direct: '',
      dtr:
        'https://www.drivethrurpg.com/product/302571/Fate-Condensed?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-condensed',
    },
    'fate-system-toolkit': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=243',
      dtr:
        'https://www.drivethrurpg.com/product/119385/Fate-System-Toolkit?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-system-toolkit',
    },
    'fate-adversary-toolkit': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=328',
      dtr:
        'https://www.drivethrurpg.com/product/219203/Fate-Adversary-Toolkit?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-adversary-toolkit',
    },
    'atomic-robo': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=254',
      dtr:
        'https://www.drivethrurpg.com/product/130204/Atomic-Robo-RPG?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/atomic-robo-the-roleplaying-game',
    },
    'frontier-spirit': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=307',
      dtr:
        'https://www.drivethrurpg.com/product/161674/Frontier-Spirit-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch:
        'https://evilhat.itch.io/frontier-spirit-a-world-of-adventure-for-fate-core',
    },
    'gods-and-monsters': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=307',
      dtr:
        'https://www.drivethrurpg.com/product/150889/Gods-and-Monsters-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch:
        'https://evilhat.itch.io/gods-and-monsters-a-world-of-adventure-for-fate-core',
    },
    'sails-full-of-stars': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=307',
      dtr:
        'https://www.drivethrurpg.com/product/150022/Sails-Full-of-Stars-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch:
        'https://evilhat.itch.io/sails-full-of-stars-a-world-of-adventure-for-fate-core',
    },
    'three-rocketeers': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=307',
      dtr:
        'https://www.drivethrurpg.com/product/166281/The-Three-Rocketeers-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch:
        'https://evilhat.itch.io/the-three-rocketeers-a-world-of-adventure-for-fate-core',
    },
    'war-of-ashes': {
      direct:
        'https://www.evilhat.com/store/index.php?main_page=product_info&cPath=79&products_id=291',
      dtr:
        'https://www.drivethrurpg.com/product/157134/War-of-Ashes-Fate-of-Agaptus?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/war-of-ashes-fate-of-agaptus',
    },
    ihunt: {
      dtr:
        'https://www.drivethrurpg.com/product/298255/iHunt-The-RPG?affiliate_id=144937',
      itch: 'https://machineage.itch.io/ihunt-the-rpg',
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
      itch: file(name: { eq: "buy--itch" }) {
        childImageSharp {
          fixed(width: 200, jpegQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      direct: file(name: { eq: "buy--eh" }) {
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
        {Object.entries(books[value]).map(([key, v]) => (
          <ListItem
            key={v}
            url={v}
            image={buyImages[key]}
            altText={storeAltText[key]}
          />
        ))}
      </ul>
    </section>
  );
};

ListItem.propTypes = {
  url: PropTypes.string,
  image: PropTypes.object,
  altText: PropTypes.string,
};

WhereToBuy.propTypes = {
  value: PropTypes.string,
};

export default WhereToBuy;
