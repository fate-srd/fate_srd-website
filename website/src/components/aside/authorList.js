import PropTypes from 'prop-types';
import React from 'react';

function AuthorList(props) {
  const { authorlist } = props;

  if (authorlist === undefined || authorlist === null) return '';

  return (
    <section>
      <h2 className="nav-in-page__about__header">Author(s):</h2>
      <ul className="nav-in-page__about__authorlist">
        {authorlist.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
}

AuthorList.propTypes = {
  authorlist: PropTypes.array,
};

export default AuthorList;
