/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "../useMediaQuery";
import Search from "../../public/svgs/search.svg";

// const paintings = [
//   { id: 1, title: "Iyoba", image: "/images/Iyoba.webp" },
//   { id: 2, title: "Brinley", image: "/images/Brinley.webp" },
//   { id: 3, title: "Bronzino", image: "/images/Bronzino.webp" },
//   { id: 4, title: "Dionysos", image: "/images/Dionysos.webp" },
//   { id: 5, title: "Pieta", image: "/images/Pieta.webp" },
//   { id: 6, title: "Dusasa", image: "/images/Dusasa.jpg" },
//   { id: 7, title: "AG", image: "/images/AG.png" },
//   { id: 8, title: "SL", image: "/images/SL.jpeg" },
//   { id: 9, title: "SW", image: "/images/SW.jpeg" },
// ];

const paintings = [
    { id: 1, title: "1 - BUSTE FÉMININ", image: "/hind/64.jpg" },
    { id: 2, title: "2 - MASKS 1912/1914", image: "/hind/1.jpg" },
    { id: 3, title: "3 - JEUNE FEMME AU JOURNAL", image: "/hind/13.jpg" },
    { id: 4, title: "4 - WIKIWAND", image: "/hind/23.jpg" },
    { id: 5, title: "5 - TÊTE AU MIROR", image: "/hind/62.jpg" },
    { id: 6, title: "6 - FEMME ÊTENDUE LISANT", image: "/hind/19.jpg" },
    { id: 7, title: "7 - UNTITLED", image: "/hind/5.jpg" },
    { id: 8, title: "8 - SER ARTISTA", image: "/hind/46.jpg" },
    { id: 9, title: "9 - NU DE DOS INACHEVÉ", image: "/hind/10.jpg" },
    { id: 10, title: "10 - LA MONTSERRAT", image: "/hind/10.png" },
    
]

export default function Collection() {
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

  const filteredPaintings = paintings.filter((painting) =>
    painting.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="mx-auto my-20 flex max-w-7xl flex-col px-4 lg:my-32 lg:px-5">
        <motion.div
          initial="initial"
          animate="animate"
          variants={isDesktop ? fadeInUp : fadeInUpMobile}
        >
          <h1 className="ogg-regular mb-2 text-[3rem] leading-[3rem] text-[#2d2d2d] lg:mb-3 lg:text-[5rem] lg:leading-[5rem]">
            Colección
          </h1>
          <p className="plain-regular mb-8 text-sm text-[#878787] lg:mb-12 lg:text-base">
            Colección de algunas de las Obras de Julio González
          </p>
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

        {/* Paintings Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {filteredPaintings.map((painting, index) => (
            <motion.div
              key={painting.id}
              initial="initial"
              animate="animate"
              variants={isDesktop ? fadeInUp : fadeInUpMobile}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-4 flex w-full justify-center">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="h-auto w-3/4 object-cover lg:w-2/3"
                />
              </div>
              <div className="ogg-regular flex w-full justify-center">
                <h3 className="w-3/4 text-lg text-[#363636] lg:w-2/3 lg:text-xl">
                  {painting.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPaintings.length === 0 && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={isDesktop ? fadeInUp : fadeInUpMobile}
            className="plain-regular mt-12 text-center text-[#878787]"
          >
            <p>No se encontraron obras que coincidan con su búsqueda.</p>
          </motion.div>
        )}
      </div>
    </>
  );
}

