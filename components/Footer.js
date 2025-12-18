/* eslint-disable @next/next/no-html-link-for-pages */
import Facebook from "../public/svgs/facebook.svg";
import Twitter from "../public/svgs/twitter.svg";
import YouTube from "../public/svgs/youtube.svg";
import Pinterest from "../public/svgs/pinterest.svg";
import Instagram from "../public/svgs/instagram.svg";

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t-[1px] border-[#a1a1a15e]">
        <div className="plain-regular flex  flex-wrap px-5 py-16 md:flex-row md:flex-nowrap md:items-start lg:container lg:mx-auto lg:items-start xl:pl-2">
          <div className="w-64 flex-shrink-0 text-left tracking-wide text-[#8f8f8f] lg:mx-auto">
            <a href="/" className="flex md:justify-start">
              <div className="benguiat-logo text-[#ec0426] text-lg md:text-xl lg:text-2xl text-center">
                Le Femme
                <br />
                Forgée
              </div>
            </a>
            <div className="mt-12 lg:mt-24">
              <p className="text-sm">Museo UPV</p>
              <p className=" text-sm">Camino de Vera</p>
              <p className="text-sm">Valencia, 46022</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-sm">Teléfono: +34 96 387 70 00</p>
              <p className="text-sm">Teléfono: +34 620 040 050</p>
            </div>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap md:mt-0 lg:pl-0 xl:pl-56">
            <div className="w-full lg:px-4 mb-[4.7rem]">
              <div className="ogg-medium mb-10 text-[#363636]">
                <h3 className="text-[1.7rem]">
                  Recibe cultura en tu correo
                </h3>
              </div>
              <div>
                <input
                  className="mr-7 h-14 xl:w-[32rem] lg:w-[30rem] md:w-[20rem] sm:w-[22rem] w-full rounded-xl border-2 bg-white px-4 py-3 placeholder-[#8f8f8f]"
                  placeholder="Correo electrónico"
                />
                <button className="rounded-xl border-2 border-[#050505] px-8 py-3 xl:w-[8rem] lg:w-[8rem] md:w-[8rem] sm:w-[8rem] w-full mt-4 sm:mt-0">
                  Enviar
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 lg:px-4">
              <div className="plain-regular mb-10 list-none space-y-5 text-[#363636]">
                <li>
                  <a href="/">Sobre el Museo</a>
                </li>
                <li>
                  <a href="/">Misión e Historia</a>
                </li>
                <li>
                  <a href="/">Áreas de Colección</a>
                </li>
                <li>
                  <a href="/">Departamentos de Conservación</a>
                </li>
                <li>
                  <a href="/">Prensa</a>
                </li>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:ml-32 lg:w-1/6 lg:pl-4 xl:ml-32">
              <div className="plain-regular mb-10 list-none space-y-5 text-[#363636]">
                <li>
                  <a href="/">Apoyo</a>
                </li>
                <li>
                  <a href="/">Membresía</a>
                </li>
                <li>
                  <a href="/">Organizar un Evento</a>
                </li>
                <li>
                  <a href="/">Viajar con el Museo</a>
                </li>
                <li>
                  <a href="/">Apoyo Corporativo</a>
                </li>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:ml-24 lg:w-1/4 lg:px-4">
              <div className="plain-regular mb-10 list-none space-y-5 text-[#363636]">
                <li>
                  <a href="/">Índice del Sitio</a>
                </li>
                <li>
                  <a href="/">Términos y Condiciones</a>
                </li>
                <li>
                  <a href="/">Política de Privacidad</a>
                </li>
                <li>
                  <a href="/">Información de Contacto</a>
                </li>
              </div>
            </div>
            <div className="w-full lg:px-4 mt-2 mb-[4.7rem]">
              <div className="plain-regular mb-10 text-[#363636] flex flex-row items-center space-x-2">
                <h3 className="text-[1.1rem] mr-12 sm:block hidden">
                  Síguenos
                </h3>
                <Facebook/>
                <Twitter/>
                <Pinterest/>
                <Instagram/>
                <YouTube/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
