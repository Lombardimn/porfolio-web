import { useEffect, useState } from "react";

interface CarouselProps {
  testimonials: Array<{
    id: number;
    user: string;
    description: string;
    image: string;
    job: string;
  }>
}

interface CarouselControls {
  showControls?: boolean;
  autoPlay?: boolean;
}

export const Carousel = ({ testimonials, showControls, autoPlay }: CarouselProps & CarouselControls) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [selectedImage, setSelectedImage] = useState<string>(testimonials[0].image)
  const [data, setData] = useState<CarouselProps['testimonials'][0]>(testimonials[0])
  const [loaded, setLoaded] = useState<boolean>(false)

  {/* Autoplay */ }
  useEffect(() => {
    if (autoPlay || !showControls) {
      const interval = setInterval(() => {
        selectNewImage()
      }, 8000)

      return () => clearInterval(interval)
    }
  })

  {/* Funciones de navegación unificada*/ }
  const selectNewImage = (next = true) => {
    setLoaded(false)

    {/* Aplico una demora para la transición de cambio de imagen */ }
    setTimeout(() => {
      const nextIndex = next
        ? (selectedIndex + 1) % testimonials.length
        : (selectedIndex - 1 + testimonials.length) % testimonials.length

      setSelectedIndex(nextIndex)
      setSelectedImage(testimonials[nextIndex].image)
      setData(testimonials[nextIndex])
    }, 500)
  }

  const previous = () => {
    selectNewImage(false)
  };

  const next = () => {
    selectNewImage()
  }

  return (
    <>
      <div className="relative h-48 flex flex-col pt-8 pb-2 px-6 border border-solid border-slate-900/10 rounded-2xl shadow-md bg-slate-50 dark:bg-slate-950">
        <div className="absolute -top-8 transform -translate-x-1/2 left-1/2">
          <img 
            src={selectedImage}
            alt="perfil"
            onLoad={() => setLoaded(true)} 
            className={`w-16 h-16 rounded-full shadow-md transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        <div className="pt-2 pb-4 px-1 font-light text-center text-sm w-full border-b border-solid border-slate-900/10">
          <p className="leading-relaxed text-slate-900 dark:text-slate-50">{data.description}</p>
        </div>

        <div className="flex flex-col gap-0.5 pt-2 text-center">
          <p className="font-semibold text-md">{data.user}</p>
          <span className="text-sm text-teal-700 dark:text-teal-500 font-light text-shadow-2xs shadow-teal-500">{data.job}</span>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center pt-6">
        {
          showControls
            ? (
              <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-row justify-between w-full pt-3">
                <button
                  className="rounded-xl !p-1 flex flex-row-reverse items-center"
                  onClick={previous}
                >
                  <i className="ph-duotone ph-caret-left"></i>
                </button>
                <button
                  className="rounded-xl !p-1 flex flex-row-reverse items-center"
                  onClick={next}
                >
                  <i className="ph-duotone ph-caret-right"></i>
                </button>
              </div>
            )
            : <></>
        }

        {/* Indicadores de navegación de las imagenes*/}
        
        {
          testimonials.length > 1 &&
          <div className="h-6 flex flex-row items-end justify-center gap-2">
            {
              testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === selectedIndex ? "bg-teal-500 dark:bg-teal-300 transform scale-125 transition-transform duration-300 ease-in-out" : "bg-slate-400"}`}
                />
              ))
            }
          </div>
        }
      </div>
    </>
  );
};