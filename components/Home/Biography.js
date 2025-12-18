/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import useMediaQuery from "../useMediaQuery";

export default function Biography() {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easing },
    },
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:py-24">
      {/* Title Section */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="mb-16 border-b-2 border-[#c2bfba] pb-8"
      >
        <h1 className="ogg-regular text-5xl tracking-tight text-[#2d2d2d] lg:text-8xl">
          Biografía
        </h1>
      </motion.div>

      {/* Article Layout Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        
      {/* Left Column: Image (Spans 4 columns) */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="lg:col-span-4"
      >
        <div className="sticky top-8">
          {/* Added mx-auto w-1/2 for mobile and reset to w-full on lg screens */}
          <div className="mx-auto w-1/2 overflow-hidden bg-gray-100 shadow-sm lg:w-full">
            <img
              src="/hind/julio.jpg"
              alt="Julio González"
              className="h-auto w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <p className="plain-regular mt-4 text-xs uppercase tracking-widest text-[#878787] text-center lg:text-left">
            Julio González, c. 1930
          </p>
        </div>
      </motion.div>

        {/* Center Column: Main Text (Spans 5 columns) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="lg:col-span-5"
        >
          <div className="plain-regular space-y-8 text-lg leading-relaxed text-[#363636]">
            <p className="relative">
              {/* Drop Cap styling */}
              <span className="float-left mr-3 mt-1 text-7xl font-serif leading-none text-[#2d2d2d]">
                J
              </span>
              <strong className="plain-medium text-[#2d2d2d]">ulio González</strong> (Barcelona, 1876 - Arcueil, 1942) fue un escultor y pintor español, reconocido como uno de los pioneros de la escultura en hierro del siglo XX. Su innovador trabajo transformó el metal en un medio expresivo, estableciendo las bases para el arte abstracto moderno.
            </p>
            <p>
              Inició su formación artística en el taller de orfebrería de su padre, donde desarrolló una profunda comprensión del trabajo con metales. Tras establecerse en París en 1900, se relacionó con los círculos artísticos de vanguardia, incluyendo a Pablo Picasso, con quien colaboró estrechamente en la década de 1930.
            </p>
            <p>
              González revolucionó la escultura al concebir el hierro como un medio para <span className="italic">&ldquo;dibujar en el espacio&rdquo;</span>, creando obras que combinaban la solidez del metal con la ligereza de la línea. Sus esculturas abstractas, caracterizadas por formas orgánicas y estructuras geométricas, influyeron profundamente en el desarrollo del arte moderno.
            </p>
            <p>
              Su legado perdura en las colecciones de los principales museos del mundo, incluyendo el Museo de Arte Moderno de Nueva York, el Centro Pompidou de París y el Museo Nacional Centro de Arte Reina Sofía de Madrid.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Quick Facts (Spans 3 columns) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="lg:col-span-3 lg:border-l-2 lg:border-[#777572] lg:pl-10"
        >
          <h3 className="ogg-medium mb-8 text-xl uppercase tracking-wider text-[#2d2d2d]">
            Cronología
          </h3>
          <dl className="space-y-6">
            {[
              { label: "Nacimiento", val: "21 de sept. 1876, Barcelona" },
              { label: "Fallecimiento", val: "27 de marzo 1942, Arcueil" },
              { label: "Nacionalidad", val: "Española" },
              { label: "Movimiento", val: "Modernismo, Abstracción" },
              { label: "Medio", val: "Escultura, Hierro, Pintura" },
            ].map((item, idx) => (
              <div key={idx} className="group border-b-2 border-[#c2bfba] pb-4">
                <dt className="plain-medium mb-1 text-xs uppercase tracking-tighter text-[#878787]">
                  {item.label}
                </dt>
                <dd className="plain-regular text-sm text-[#363636] group-hover:text-black transition-colors">
                  {item.val}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
