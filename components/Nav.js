/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useMediaQuery from "./useMediaQuery";
import { motion } from "framer-motion";

export default function Nav() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  let easing = [0.6, 0.05, 0.01, 0.99];

  const fadeInUp = {
    hidden: { opacity: 0 },
    initial: {
      y: 60,
      opacity: 1,
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
    hidden: { opacity: 0 },
    initial: {
      y: 60,
      opacity: 1,
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
      <motion.div
        initial="hidden"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={isDesktop ? fadeInUp : fadeInUpMobile}
        className="mx-auto flex flex-row items-center pr-5 pt-5 pb-5 pl-5 lg:max-w-7xl lg:pr-0 xl:container xl:pr-5"
      >
        <a className="mb-4 mr-12 flex items-center font-medium text-gray-900 md:mb-0 xl:mr-20">
          <Link href="/" passHref>
            <a className="text-center">
              <div className="benguiat-logo text-[#ec0426] text-lg md:text-xl lg:text-2xl">
                LE FEMME
                <br />
                FORGÉE
              </div>
            </a>
          </Link>
        </a>
        <div className="plain-medium hidden flex-wrap items-center justify-center gap-x-16 text-[0.9rem] text-[#3b3b3b] md:ml-auto md:mr-auto lg:flex">
          <Link href="/visit" passHref>
            <a className="transition hover:text-black">VISITA</a>
          </Link>
          <Link href="/exhibition" passHref>
            <a className="transition hover:text-black">COLECCIÓN</a>
          </Link>
          <Link href="/events" passHref>
            <a className="transition hover:text-black">BIBLIOTECA</a>
          </Link>
        </div>
        <div className="grow" />
        <div className="flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path
              d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
              fill="#1040e2"
            />
            <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
