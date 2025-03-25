import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contacta a Alberto Lascarro via email lascarroalberto1@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contacto</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          Sientase libre de contactarme: lascarroalberto1@gmail.com
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
