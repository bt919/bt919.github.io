import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import "@/styles/carousel.css"

export function Carousel({ srcList }: { srcList: string[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {srcList.map((src) => {
                        return <img src={src} alt="demo screenshot" key={src} className="embla__slide" />
                    })}
                </div>
            </div>
            <button className="embla__prev" type="button" onClick={scrollPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <title>Prev</title>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

            </button>
            <button className="embla__next" type="button" onClick={scrollNext}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <title>Next</title>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>


            </button>
        </div>
    )
}
