import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Alberto Lascarro's personal website. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Acerca de este sitio</Link>
          </h2>
          <p>
            En este espacio encontrarás una muestra de mis
            proyectos más destacados, en los cuales he
            logrado integrar brindar a cada cliente una
            experiencia única y personalizada, ya sea que
            necesites un diseño visualmente atractivo, una
            producción audiovisual que cautive a tu audiencia
            o una experiencia inmersiva en realidad aumentada
          </p>
        </div>
      </header>
      <p>
        {' '}
        Bienvenido a mi sitio web. Sientase libre de leer más{' '}
        <Link to="/about">acerca de mí</Link>, revisar mi{' '}
        <Link to="/resume">experiencia</Link>, <Link to="/projects">mis servicios</Link>, o{' '}
        <Link to="/contact">contactarme</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
