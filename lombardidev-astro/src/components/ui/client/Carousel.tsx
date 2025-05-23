import { useEffect, useRef, useState } from "react";
import { CarouselItem } from "./CarouselItem";

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
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [itemsPerPage, setItemsPerPage] = useState<number>(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  {/* Autoplay */ }
  useEffect(() => {
    if ((autoPlay || !showControls) && totalPages > 0) {
      const interval = setInterval(() => {
        nextPage()
      }, 8000)

      return () => clearInterval(interval)
    }
  }, [autoPlay, showControls, totalPages])

  {/* Ajuste de items por página según el ancho de la pantalla */ }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  {/* Conteo de paginas */ }
  useEffect(() => {
    setTotalPages(Math.ceil(testimonials.length / itemsPerPage))
  }, [itemsPerPage])

  {/** Funciones de navegación */}
  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  {/** Obtener las propiedades para la página actual */}
  const currentProperties = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <>
      <div
        ref={carouselRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {
          currentProperties.map((property) => (
            <CarouselItem 
              key={property.id}
              property={property}
            />
          ))
            
        }
      </div>

      <div className="relative flex flex-col items-center justify-center pt-6">
        {
          showControls
            ? (
              <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-row justify-between w-full pt-3">
                <button
                  className="rounded-xl !p-1 flex flex-row-reverse items-center"
                  onClick={prevPage}
                >
                  <i className="ph-duotone ph-caret-left"></i>
                </button>
                <button
                  className="rounded-xl !p-1 flex flex-row-reverse items-center"
                  onClick={nextPage}
                >
                  <i className="ph-duotone ph-caret-right"></i>
                </button>
              </div>
            )
            : <></>
        }

        {/* Indicadores de página */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 transition-all ${ currentPage === index ? "bg-teal-500 w-4" : "bg-gray-300"}`}
              onClick={() => {
                goToPage(index)
              }}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};