import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import data from "../../json/home.json";
const Judges: React.FC = () => {
    const plugin1 = React.useRef(
        Autoplay({ delay: 6800, stopOnInteraction: true })
      );
    //   const plugin2 = React.useRef(
    //     Autoplay({ delay: 2000, stopOnInteraction: true })
    //   );
  return (
    <div className="col-span-full sm:col-span-3 row-span-4 sm:block rounded-3xl bg-primary">
              <h1 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[4rem] md:mb-[6rem] text-center">
                Event Judges
              </h1>
              <div className="w-full h-5/6 flex justify-center items-center">
                <Carousel
                  plugins={[plugin1.current]}
                  className="bg-transparent w-full h-full"
                >
                  <CarouselContent>
                    {data.eventHighlights.map((src, index) => (
                      <CarouselItem key={index} className="bg-transparent">
                        <Card className="bg-transparent w-full h-full">
                          <CardContent className="flex items-center bg-transparent justify-center w-full h-full">
                            <div className="bg-transparent text-white h-72 w-72 p-2 border-xl">
                              <img
                                src={src}
                                alt=""
                                className="object-contain"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
  )
}

export default Judges
