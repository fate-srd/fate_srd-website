// import { Link } from "gatsby"
import React from "react"
import Menu from "./menu"

const Aside = ruleBook => {
  return (
    <nav className="nav-in-page">
      <h1 className="nav-in-page__title nav-in-page__mobile-toggle">
        <span>
          <i className="far fa-bars"></i>
          <i className="far fa-times"></i>
        </span>
        {ruleBook.ruleBook}
      </h1>
      {/* {console.log(`menu-${ruleBook.ruleBook.toLowerCase().replace(" ", "-")}`)} */}
      <div className="nav-in-page__content">
        <Menu menuName="menu-fate-system-toolkit" classBase="nav-in-page" />

        <div className="nav-in-page__about">
          {/* <img src={{ cover }} alt="" className="nav-in-page__about__image" /> */}
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
          <p>Amanda Valentine, Clark Valentine, Fred Hicks, Leonard Balsera</p>
        </div>
      </div>
    </nav>
  )
}

export default Aside
