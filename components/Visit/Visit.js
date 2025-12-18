/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import useMediaQuery from "../useMediaQuery";

export default function Visit() {
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

  return (
    <>
      <div className="mx-auto my-20 flex max-w-7xl flex-col justify-center px-4 lg:my-32 lg:px-5">
        <motion.div
          initial="initial"
          animate="animate"
          variants={isDesktop ? fadeInUp : fadeInUpMobile}
        >
          <h1 className="ogg-regular mb-8 text-[3rem] leading-[3rem] text-[#2d2d2d] lg:mb-12 lg:text-[5rem] lg:leading-[5rem]">
            Visítanos
          </h1>
        </motion.div>

        <div className="mb-8 border-t-2 border-[#c2bfba] lg:mb-12"></div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {/* First row: Image left, Text right */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={isDesktop ? fadeInUp : fadeInUpMobile}
            className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12"
          >
            <div className="w-full overflow-hidden bg-gray-200 lg:w-1/2">
              <img
                src="/images/upv-1.jpg"
                alt="Museum Location 1"
                className="h-64 w-full object-cover lg:h-96"
              />
            </div>
            <div className="plain-regular w-full text-[#303030] lg:w-1/2">
              <p className="text-base leading-relaxed text-[#363636] lg:text-lg">
                Experimenta la grandeza de nuestro principal lugar, con exhibiciones 
                y colecciones de clase mundial que abarcan siglos de logros artísticos.
                <br />
                Nuestra colección ofrece una oportunidad 
                única para explorar diversas culturas y movimientos artísticos 
                en un hermoso y inspirador ambiente.
              </p>
            </div>
          </motion.div>

          {/* Second row: Text left, Image right */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={isDesktop ? fadeInUp : fadeInUpMobile}
            className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12"
          >
            <div className="plain-regular order-2 w-full text-[#303030] lg:order-1 lg:w-1/2">
              <p className="text-base leading-relaxed text-[#363636] lg:text-lg">
                Descubre nuestro museo, ubicado en un ambiente sereno
                que perfecta complementa el arte dentro. Este espacio proporciona
                un ambiente íntimo para exhibiciones especiales y ofrece a los
                visitantes un refugio tranquilo para contemplar y apreciar la
                belleza de la expresión artística.
              </p>
            </div>
            <div className="order-1 w-full overflow-hidden bg-gray-200 lg:order-2 lg:w-1/2">
              <img
                src="/images/upv-2.jpg"
                alt="Museum Location 2"
                className="h-64 w-full object-cover lg:h-96"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

