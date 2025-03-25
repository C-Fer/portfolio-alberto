import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Alberto&apos;Lascarro</h2>
        <p>
          <a href="mailto:lascarroalberto1@gmail.com">lascarroalberto1@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>Acerca de mí</h2>
      <p>
        Hola, me llamo Alberto Lascarro,
        tengo 22 años, me considero una persona muy creativa
        y siempre busco nuevas formas de innovar y expresar la esencia de cada marca.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Más acerca de mí
            </Link>
          ) : (
            <Link to="/about" className="button">
              Acerca de mí
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
