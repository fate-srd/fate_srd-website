import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBullhorn } from '@fortawesome/pro-solid-svg-icons';

const AnnouncementText = () => (
  <p>
    <strong>This site now works offline!</strong>{' '}
    <a href="#" className="announcement__button">
      Learn more
    </a>
  </p>
);

const Announcement = () => {
  useEffect(() => {
    const CookieName = 'Announcement';
    const announcementBar = document.querySelector('.announcement');

    /**
     * https://www.w3schools.com/js/js_cookies.asp
     */
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      const expires = `expires=${d.toUTCString()}`;
      document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }

    function checkCookie() {
      const cookieList = document.cookie;
      return cookieList.includes(CookieName);
    }

    function handleAnnouncement() {
      if (!checkCookie()) {
        announcementBar.classList.add('announcement--show');
      }
    }

    const closeButton = document.querySelector('.announcement__close');
    closeButton.addEventListener('click', () => {
      setCookie(CookieName, false, 30);
      announcementBar.classList.remove('announcement--show');
    });

    handleAnnouncement();
  });

  return (
    <section className="announcement">
      <div className="announcement__inner">
        <FontAwesomeIcon icon={faBullhorn} className="bull" />
        <AnnouncementText />
        <button className="announcement__close" type="button">
          Close
          <i className="fas fa-times announcement__close__icon" />
          <FontAwesomeIcon
            icon={faTimes}
            className="announcement__close__icon"
          />
        </button>
      </div>
    </section>
  );
};

export default Announcement;
