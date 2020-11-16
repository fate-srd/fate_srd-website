import React, { useEffect } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/pro-solid-svg-icons';

// https://gomakethings.com/how-to-get-all-parent-elements-with-vanilla-javascript/
const getParents = function (elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        const matches = (this.document || this.ownerDocument).querySelectorAll(
          s
        );
        let i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // Set up a parent array
  const parents = [];

  // Push each parent element to the array
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (selector) {
      if (elem.matches(selector)) {
        parents.push(elem);
      }
      continue;
    }
    parents.push(elem);
  }

  // Return our parent array
  return parents;
};

function createMenuHierarchy(menuData, menuName) {
  const tree = [];
  const mappedArr = {};
  let arrElem;
  let mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (let i = 0, len = menuData.length; i < len; i++) {
    arrElem = menuData[i].node;
    if (arrElem.menu_name === menuName && arrElem.enabled === true) {
      mappedArr[arrElem.drupal_id] = arrElem;
      if (
        arrElem.drupal_parent_menu_item != null &&
        arrElem.drupal_parent_menu_item.includes(arrElem.bundle)
      ) {
        const strippedDrupalId = arrElem.drupal_parent_menu_item.replace(
          `${arrElem.bundle}:`,
          ''
        );
        mappedArr[arrElem.drupal_id].drupal_parent_menu_item = strippedDrupalId;
      }
      mappedArr[arrElem.drupal_id].children = [];
    }
  }

  for (const id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.drupal_parent_menu_item) {
        mappedArr[mappedElem.drupal_parent_menu_item].children.push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

function buildLink(link, classBase) {
  if (!link.external && link.link.uri_alias) {
    return (
      <Link
        activeClassName="active"
        to={link.link.uri_alias}
        className={classBase ? `${classBase}__link` : ''}
      >
        {link.title}
      </Link>
    );
  }
  if (!link.external && link.link.uri.includes('internal:')) {
    return (
      <Link
        activeClassName="active"
        className={classBase ? `${classBase}__link` : ''}
        to={link.link.uri_alias}
      >
        {link.title}
      </Link>
    );
  }
  return (
    <a
      href={link.link.uri_alias}
      className={classBase ? `${classBase}__link external` : 'external'}
    >
      {link.title}
    </a>
  );
}

function buildMenu(menuArray, classBase) {
  if (!menuArray) {
    return;
  }
  const menu = [];
  for (const item in menuArray) {
    if (menuArray[item].children.length !== 0) {
      menu.push(
        <li
          key={menuArray[item].drupal_id}
          className={classBase ? `${classBase}__li` : ''}
        >
          {buildLink(menuArray[item], classBase)}

          <button
            className={classBase ? `${classBase}__show-menu` : 'show-menu'}
            aria-expanded="false"
          >
            <span className="closed">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className="open">
              <FontAwesomeIcon icon={faMinus} />
            </span>
          </button>
          <ul
            className={
              classBase ? `${classBase}__ul ${classBase}__ul--child` : ''
            }
          >
            {buildMenu(menuArray[item].children, classBase)}
          </ul>
        </li>
      );
    } else {
      menu.push(
        <li
          key={menuArray[item].drupal_id}
          className={classBase ? `${classBase}__li` : ''}
        >
          {buildLink(menuArray[item], classBase)}
        </li>
      );
    }
  }

  return menu;
}

function generateMenu(menuLinks, menuName, classBase) {
  let menu;

  menu = createMenuHierarchy(
    menuLinks.allMenuLinkContentMenuLinkContent.edges,
    menuName
  );
  menu = buildMenu(menu, classBase);

  return menu;
}

function Menu({ menuName, classBase }) {
  useEffect(() => {
    const context = document;

    const sectionToggleButtons = Array.from(
      context.querySelectorAll(`.${classBase}__show-menu`)
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

    const activePage = document.querySelector('.nav-in-page__link.active');
    const parents = getParents(activePage, '.nav-in-page__ul--child');
    parents.map((v) =>
      v.previousElementSibling.setAttribute('aria-expanded', true)
    );
  });

  return (
    <StaticQuery
      query={graphql`
        query MenuQuery {
          allMenuLinkContentMenuLinkContent(
            sort: { order: ASC, fields: weight }
          ) {
            edges {
              node {
                enabled
                title
                expanded
                external
                langcode
                weight
                link {
                  uri
                  uri_alias
                }
                drupal_parent_menu_item
                bundle
                drupal_id
                menu_name
              }
            }
          }
        }
      `}
      render={(data) => (
        <nav className={classBase ? `${classBase}__nav` : menuName}>
          <ul className={classBase ? `${classBase}__ul` : ''}>
            {generateMenu(data, menuName, classBase)}
          </ul>
        </nav>
      )}
    />
  );
}

Menu.propTypes = {
  menuName: PropTypes.string,
  classBase: PropTypes.string,
};

Menu.defaultProps = {
  menuName: `main`,
};

export default Menu;
