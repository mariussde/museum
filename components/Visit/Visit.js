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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={isDesktop ? fadeInUp : fadeInUpMobile}
            className="flex flex-col"
          >
            <div className="mb-6 w-full overflow-hidden rounded-lg bg-gray-200 lg:mb-8">
              <img
                src="/images/upv-1.jpg"
                alt="Museum Location 1"
                className="h-64 w-full object-cover lg:h-96"
              />
            </div>
            <div className="plain-regular text-[#303030]">
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

          <motion.div
            initial="initial"
            animate="animate"
            variants={isDesktop ? fadeInUp : fadeInUpMobile}
            className="flex flex-col"
          >
            <div className="mb-6 w-full overflow-hidden rounded-lg bg-gray-200 lg:mb-8">
              <img
                src="/images/upv-2.jpg"
                alt="Museum Location 2"
                className="h-64 w-full object-cover lg:h-96"
              />
            </div>
            <div className="plain-regular text-[#303030]">
              <p className="text-base leading-relaxed text-[#363636] lg:text-lg">
                Descubre nuestro museo, ubicado en un ambiente sereno
                que perfecta complementa el arte dentro. Este espacio proporciona
                un ambiente íntimo para exhibiciones especiales y ofrece a los
                visitantes un refugio tranquilo para contemplar y apreciar la
                belleza de la expresión artística.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

