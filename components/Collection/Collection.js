/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "../useMediaQuery";
import Search from "../../public/svgs/search.svg";

const paintings = [
  { id: 1, title: "Iyoba", image: "/images/Iyoba.webp" },
  { id: 2, title: "Brinley", image: "/images/Brinley.webp" },
  { id: 3, title: "Bronzino", image: "/images/Bronzino.webp" },
  { id: 4, title: "Dionysos", image: "/images/Dionysos.webp" },
  { id: 5, title: "Pieta", image: "/images/Pieta.webp" },
  { id: 6, title: "Dusasa", image: "/images/Dusasa.jpg" },
  { id: 7, title: "AG", image: "/images/AG.png" },
  { id: 8, title: "SL", image: "/images/SL.jpeg" },
  { id: 9, title: "SW", image: "/images/SW.jpeg" },
];

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
          <h1 className="ogg-regular mb-8 text-[3rem] leading-[3rem] text-[#2d2d2d] lg:mb-12 lg:text-[5rem] lg:leading-[5rem]">
            Colección
          </h1>
        </motion.div>

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
              <div className="mb-4 w-full overflow-hidden bg-gray-200">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="plain-regular">
                <h3 className="text-lg text-[#363636] lg:text-xl">
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

