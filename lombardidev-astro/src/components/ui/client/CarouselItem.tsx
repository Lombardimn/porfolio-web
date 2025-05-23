import { useState } from "react";

interface TestimonialProps {
  id: number;
  user: string;
  description: string;
  image: string;
  job: string;
}


export const CarouselItem = ({property}: {property: TestimonialProps} ) => {
  const [loaded, setLoaded] = useState<boolean>(false)

  return (
    <div className="relative h-48 flex flex-col pt-8 pb-2 px-6 border border-solid border-slate-900/10 rounded-2xl shadow-md bg-slate-50 dark:bg-slate-950">
      <div className="absolute -top-8 transform -translate-x-1/2 left-1/2">
        <img
          src={property.image}
          alt="perfil"
          onLoad={() => setLoaded(true)}
          className={`w-16 h-16 rounded-full shadow-md transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      <div className="pt-2 pb-4 px-1 font-light text-center text-sm w-full border-b border-solid border-slate-900/10">
        <p className="leading-relaxed text-slate-900 dark:text-slate-50">{property.description}</p>
      </div>

      <div className="flex flex-col gap-0.5 pt-2 text-center">
        <p className="font-semibold text-md">{property.user}</p>
        <span className="text-sm text-teal-700 dark:text-teal-500 font-light text-shadow-2xs shadow-teal-500">{property.job}</span>
      </div>
    </div>
  )
}