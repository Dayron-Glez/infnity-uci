import { Menu } from "../components/Menu";
import { Carousel } from "@material-tailwind/react";
import { imagenes } from "../utils/Images";

export function HomePage() {
  return (
    <>
      <div
        id="particles-js"
        className="flex flex-col h-[100vh] w-full bg-[#0d2226]  overflow-x-hidden"
      >
        <header className=" ">
          <Menu />
        </header>
        <main className="flex flex-col h-[100vh] w-[100vw] justify-center items-center overflow-y-hidden">
          <div className="flex flex-row items-center justify-around pt-8">
            <div className="flex flex-col">
              <h1 className=" text-white text-[50px]">
                ASEGURAMOS TU DISFRUTE
              </h1>
              <h1 className=" text-white text-[50px]">
                CON NUESTRAS EXPERIENCAS
              </h1>
            </div>
            <Carousel
              className="rounded-xl h-[70%] w-[30%] overflow-hidden"
              autoplay
              loop
              prevArrow={false}
              nextArrow={false}
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-[35%] z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {imagenes.map((imagen, index) => (
                <div key={index} className="relative">
                  <img
                    loading="lazy"
                    src={imagen.src}
                    alt={imagen.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-0 h-[50px] left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                    <p className=' text-2xl'>{imagen.text}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </main>
      </div>
    </>
  );
}
