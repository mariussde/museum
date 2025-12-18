/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "../useMediaQuery";
import Search from "../../public/svgs/search.svg";

const books = [
    {
      id: 1,
      title: "Julio González - Catalogue Raisonné Sculpture",
      image: "/hind/raisonne.jpg",
      subtitle: "Registro académico definitivo de su revolucionaria escultura en hierro."
    },
    {
      id: 2,
      title: "Julio González - A Retrospective",
      image: "/hind/retrospective.jpg",
      subtitle: "Estudio exhaustivo de su evolución artística y aportaciones al modernismo."
    },
    {
      id: 3,
      title: "Julio González - The Museum of Modern Art",
      image: "/hind/modern art.jpg",
      subtitle: "Exposición del MoMA sobre su pionero trabajo en metal abstracto."
    },
    {
      id: 4,
      title: "Julio González - Catálogo general razonado de las pinturas, esculturas y dibujos",
      image: "/hind/catalogo.jpg",
      subtitle: "Documentación completa de su carrera multidisciplinar en pintura y escultura."
    },
    {
      id: 5,
      title: "Julio González - Collection (Centre Pompidou)",
      image: "/hind/pompidou.jpg",
      subtitle: "Análisis profundo de los extensos archivos de González en el Pompidou."
    },
    {
      id: 6,
      title: "Josephine Withers - Julio González: Sculpture in Iron",
      image: "/hind/iron.jpg",
      subtitle: "Estudio sobre cómo González revolucionó el arte al 'dibujar en el espacio'."
    },
    {
      id: 7,
      title: "Sylvia Plath - Ariel",
      image: "/hind/ariel.jpg",
      subtitle: "Poesía visceral que redefine la voz femenina mediante la lucha psíquica."
    },
    {
      id: 8,
      title: "John Berger - Ways of Seeing",
      image: "/hind/berger.jpg",
      subtitle: "Crítica de la mirada masculina y el poder del género en el arte."
    },
    {
      id: 9,
      title: "Kate Chopin - The Awakening",
      image: "/hind/chopin.jpg",
      subtitle: "Viaje de autodescubrimiento y liberación femenina en la sociedad victoriana."
    },
    {
      id: 10,
      title: "Virginia Woolf - Mrs Dalloway",
      image: "/hind/dalloway.jpg",
      subtitle: "Exploración de la interioridad femenina y restricciones sociales de posguerra."
    },
    {
      id: 11,
      title: "Paul Éluard - The Love Poems of Paul Éluard",
      image: "/hind/love poeme.jpg",
      subtitle: "Versos surrealistas que fusionan deseo romántico y libertad política."
    },
    {
      id: 12,
      title: "Pablo Neruda - Twenty Love Poems and a Song of Despair",
      image: "/hind/neruda.jpg",
      subtitle: "Exploraciones líricas sobre la pasión cruda, la melancolía y el paisaje humano."
    },
    {
      id: 13,
      title: "Anne Baldassari - Matisse Picasso",
      image: "/hind/picasso.webp",
      subtitle: "Diálogo entre dos maestros sobre su influencia mutua y rivalidad."
    },
    {
      id: 14,
      title: "Simone de Beauvoir - The Second Sex",
      image: "/hind/second sex.jpg",
      subtitle: "Texto fundamental sobre la construcción social de 'lo Otro'."
    },
    {
      id: 15,
      title: "Lynda Nead - The Female Nude: Art, Obscenity and Sexuality",
      image: "/hind/the female nude.jpg",
      subtitle: "Deconstrucción de cómo la estética regula y contiene el cuerpo femenino."
    },
    {
      id: 16,
      title: "Griselda Pollock - Woman as Image, Man as Bearer of the Look",
      image: "/hind/woman in art.jpg",
      subtitle: "Interrogación feminista sobre la diferencia sexual y la mirada en el arte."
    }
  ];

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  let easing = [0.6, -0.05, 0.01, 0.99];
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInUpMobile = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="mx-auto my-20 flex max-w-7xl flex-col px-4 lg:my-32 lg:px-5">
        <motion.div
          initial="initial"
          animate="animate"
          variants={isDesktop ? fadeInUp : fadeInUpMobile}
        >
          <h1 className="ogg-regular mb-8 text-[3rem] leading-[3rem] text-[#2d2d2d] lg:mb-12 lg:text-[5rem] lg:leading-[5rem]">
            Biblioteca
          </h1>
        </motion.div>

        <div className="mb-8 border-t-2 border-[#c2bfba] lg:mb-12"></div>

        {/* Search Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={isDesktop ? fadeInUp : fadeInUpMobile}
          className="mb-12"
        >
          <div className="flex flex-row items-center">
            <div className="pr-3">
              <Search />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="plain-regular w-full bg-[#f2eee5] text-[0.9em] tracking-[0.8px] text-[#363636] placeholder-[#878787] outline-none lg:w-96"
              placeholder="BUSCAR"
            />
          </div>
        </motion.div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial="initial"
              animate="animate"
              variants={isDesktop ? fadeInUp : fadeInUpMobile}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-4 flex w-full justify-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-auto w-3/4 object-cover lg:w-2/3"
                />
              </div>
              <div className="ogg-regular">
                <h3 className="text-lg text-[#363636] lg:text-xl">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="plain-regular mt-2 text-sm leading-relaxed text-[#878787] lg:text-base">
                    {book.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={isDesktop ? fadeInUp : fadeInUpMobile}
            className="plain-regular mt-12 text-center text-[#878787]"
          >
            <p>No se encontraron libros que coincidan con su búsqueda.</p>
          </motion.div>
        )}
      </div>
    </>
  );
}

