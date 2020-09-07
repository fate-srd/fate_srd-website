// import { Link } from "gatsby"
import React from "react"
import Menu from "./menu"

const Aside = ruleBook => (
  <nav className="nav-in-page">
    <h1 className="nav-in-page__title nav-in-page__mobile-toggle">
      <span>
        <i className="far fa-bars"></i>
        <i className="far fa-times"></i>
      </span>
      {ruleBook.ruleBook}
    </h1>
    {console.log(`menu-${ruleBook.ruleBook.toLowerCase().replace(" ", "-")}`)}
    <Menu menuName="menu-fate-core" />

    <hr />
    <div className="nav-in-page__content">
      <ul className="nav-in-page__ul">
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/get-started">Get Started!</a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/telling-stories-together">
            Telling Stories Together
          </a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/who-do-you-want-be">
            Who Do You Want To Be?
          </a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/how-do-stuff-outcomes-actions-and-approaches">
            How To Do Stuff: Outcomes, Actions, and Approaches
          </a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/challenges-contests-and-conflicts">
            Challenges, Contests, and Conflicts
          </a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/ouch-damage-stress-and-consequences">
            Ouch! Damage, Stress, and Consequences
          </a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/aspects-fate-points">
            Aspects &amp; Fate Points
          </a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/stunts">Stunts</a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/getting-better-doing-stuff-character-advancement">
            Getting Better at Doing Stuff: Character Advancement
          </a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/being-gamemaster">Being the Gamemaster</a>
        </li>
        <li className="nav-in-page__li">
          <a href="/fate-accelerated/example-characters">Example Characters</a>
        </li>
      </ul>
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

export default Aside
