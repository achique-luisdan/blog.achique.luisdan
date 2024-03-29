/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Portafolio() {
  const projects = [
    {
      "id": 1,
      "projectName": "Farmatodo - Portal de Aplicaciones Corporativas",
      "repository": "https://github.com/achique-luisdan/farmatodo-portal-aplicaciones-corporativas",
      "screen": "https://github.com/achique-luisdan/farmatodo-portal-aplicaciones-corporativas/raw/main/03.png",
      "review": {
        "link": "https://github.com/mrandyron",
        "photo":"https://github.com/achique-luisdan/farmatodo-portal-aplicaciones-corporativas/raw/main/andy2.png",
        "name": "Andy Cevallos",
        "profession": "Ingeniero de Desarrollo de Aplicaciones TI",
        "company": "Farmatodo",
        "resume": "En la organización nace el Proyecto de Migración Portal Aplicaciones Corporativas de AngularJs(1.6) a Angular 13, y con la incorporación de Luis, se ha podido llevar con éxito dicha migración, reconociendo su gran aporte en Angular13 con Angular Material, dominando HTML, CSS y JavaScript, aportando conocimientos en buenas practicas como DRY, SOLID, Documentación, entre otras. Excelente recurso para ser integrado en equipos de alto desempeño."
      }
    },
    {
      "id": 2,
      "projectName": "Farmatodo - Etiquetado Web",
      "repository": "https://github.com/achique-luisdan/farmatodo-etiquetado-web",
      "screen": "https://github.com/achique-luisdan/farmatodo-etiquetado-web/raw/main/01.png",
      "review": {
        "link": "https://www.linkedin.com/in/jhon-pereira-91750137",
        "photo":"https://github.com/achique-luisdan/farmatodo-etiquetado-web/raw/main/jhon.png",
        "name": "Jhon C. Pereira C.",
        "profession": "Especialista de Proyectos TI",
        "company": "Farmatodo",
        "resume": "El proyecto de Migración de la aplicación de Etiquetado: Kendo UI a Angular Material UI, Luis aporto todo su dominio para migrar los elementos propios de Kendo UI a angular Material UI, asi como agregar interceptores centralizado para el manejo de errores y mensaje de éxito de la capa de API servicios rest, asi como ajustar a las mejores practicas en el uso de Typescript. Recomiendo a Luis en desarrollo de front end con Angular 11."
      }
    },
    {
      "id": 3,
      "projectName": "Web Julio Masajes",
      "repository": "https://github.com/achique-luisdan/web-julio-masajes",
      "screen": "https://github.com/achique-luisdan/web-julio-masajes/raw/main/SCREEN_1.png",
      "review": {
        "link": "https://julio-masajes.web.app/",
        "photo":"https://github.com/achique-luisdan/web-julio-masajes/raw/main/julio.png",
        "name": "Julio Alvarez",
        "profession": "Dueño",
        "company": "Julio Masajes",
        "resume": "De verdad estoy súper contento y agradecido por tu excelente trabajo. Me quedé impresionado por mi página web. Me encantó. Excelente trabajo hermano. Todo perfecto. Súper agradecido contigo. Muy profesional."
      }
    }
  ];

  const [projectSelect, setProjectSelect] = useState(projects[0]);

  useEffect(() => {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    let rangeDeduction = [1, 0, 2];
    function scrollSlides() {
      currentSlide = (currentSlide + 1) % slides.length;
      let deduction = rangeDeduction[currentSlide];
      setProjectSelect(projects[deduction]);
    }

    // Set a timer to scroll the slides every 10 seconds
    setInterval(scrollSlides, 10000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (<>
    <Head>
      <title>Achique Luis Daniel🍊| Frontend, Planificación y Autocuidado</title>
      <meta name="description" content="Blog sobre Desarrollo Web Frontend, Planificación y Autocuidado" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon"  href="/favicon.png" />
    </Head>
    <main className="container">
      <h3 className='title-section-projects primary'>
        Portafolio
      </h3>
      <p>
          Estoy contento de poder compartir contigo los proyectos que he  completado con éxito, junto a empresas, emprendedores y equipos de trabajo.
      </p>
      <section className="projects">
        <div className="carousel">

          {projects.map((project) => (
            <div key={project.id} className="slide hidden" id={'slide-'+project.id}>
              <img
                src={project.screen}
                alt="Image 1"
              />
              <Link href={project.repository} className='primary' target="_blank">{project.projectName}</Link>
            </div>
          ))}
        </div>
        <hr />
        <div className="card-review">
          <div className="card-header-review">
            <Link href={projectSelect.review.link} target="_blank">
              <h4>{projectSelect.review.name} 🔗</h4>
            </Link>
          </div>
          <Image className="circle-photo" src={projectSelect.review.photo}   alt="Foto del autor de la reseña"  width={170} height={170}/>
          <div>

            <span>{projectSelect.review.profession}</span>
            <span className='company'>{projectSelect.review.company}</span>
            <p>{projectSelect.review.resume}</p>
          </div>
        </div>
      </section>
    </main>
  </>
  );
}