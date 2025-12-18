/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import useMediaQuery from "../useMediaQuery";
import Image from "next/image";

export default function Landing({ variants }) {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.7,
      },
    },
  };

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 3, duration: 0.6, ease: easing },
    },
  };

  const fadeInUpMobile = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.6, duration: 0.6, ease: easing },
    },
  };

  const fadeInUp2Mobile = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.8, duration: 0.6, ease: easing },
    },
  };

  const fadeInUp2 = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 3.4, duration: 0.6, ease: easing },
    },
  };

  return (
    <>
      <div className="mx-auto my-0 flex max-w-7xl flex-col justify-center px-4 lg:my-20 lg:items-center">
        <div className="relative flex flex-col items-center justify-center">
          <AnimateSharedLayout type="crossfade">
            <motion.div variants={container} initial="hidden" animate="show">
              <div className="imggrid z-0 pr-36 pl-12">
                {/* Desktop Images (Hidden on Mobile) */}
                <div className="pos-1 hidden lg:grid">
                  <div className="relative h-[9.2rem] w-28 bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item}>
                        <Image alt="Iyoba" src="/hind/1.jpg" height={180} width={130} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="pos-2 hidden lg:grid">
                  <div className="relative h-44 w-36 bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item} className="mr-2">
                        <Image alt="Brinley" src="/hind/13.jpg" height={195} width={145} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="pos-3 hidden lg:grid">
                  <div className="relative h-44 w-32 bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item}>
                        <Image alt="Pieta" src="/hind/23.jpg" height={190} width={130} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="pos-4 hidden lg:grid">
                  <div className="relative h-32 w-24  bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item}>
                        <Image alt="Bronzino" src="/hind/62.jpg" height={185} width={145} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                <div className="pos-5 hidden lg:grid">
                  <div className="relative h-28 w-32 bg-cover">
                    <motion.div variants={variants}>
                      <motion.div variants={item}>
                        <Image alt="Dionysos" src="/hind/19.jpg" height={170} width={130} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimateSharedLayout>

          <div className="z-10 w-full text-left lg:text-center">
            <motion.div initial="initial" animate="animate">
              <motion.h2
                variants={isDesktop ? fadeInUp : fadeInUpMobile}
                className="ogg-regular mb-4 mt-12 text-[3.5rem] leading-[3.3rem] text-[#303030] md:text-[4rem] lg:mt-32 lg:text-[9rem] lg:leading-[10rem]"
              >
                Bienvenido <span className="ogg-regular-italic">al</span> Museo
              </motion.h2>

              {/* Mobile Only Images */}
              <motion.div 
                variants={fadeInUpMobile}
                className="flex flex-row justify-between gap-2 mt-8 lg:hidden"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image alt="Iyoba" src="/hind/1.jpg" height={150} width={110} objectFit="cover" />
                </div>
                <div className="overflow-hidden rounded-sm">
                  <Image alt="Brinley" src="/hind/13.jpg" height={150} width={110} objectFit="cover" />
                </div>
                <div className="overflow-hidden rounded-sm">
                  <Image alt="Pieta" src="/hind/23.jpg" height={150} width={110} objectFit="cover" />
                </div>
              </motion.div>
            </motion.div>

            <div className="plain-medium ml-0 mt-6 flex justify-start text-left lg:mt-14 lg:ml-72 lg:justify-center">
              <motion.div initial="initial" animate="animate" className="flex flex-col">
                <motion.div variants={isDesktop ? fadeInUp2 : fadeInUp2Mobile} className="mt-6 inline-block">
                  {/* Additional content can go here */}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}