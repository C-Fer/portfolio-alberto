import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects" description="Learn about Alberto Lascarro's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Servicios</Link>
          </h2>
          <p>
            Servicios de diseño gráfico, desarrollo de experiencias inmersivas en AR,
            producción de contenido audiovisual para diferentes plataformas y creación
            de soluciones interactivas que capturen la atención y mejoren la experiencia
            del usuario. Trabajo con marcas, empresas y proyectos para transformar ideas
            en experiencias visuales innovadoras.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
