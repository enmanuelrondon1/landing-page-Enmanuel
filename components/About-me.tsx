import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto " id="about-me">
      <Title title="Sobre mi" subtitle="Conoceme" />

      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-0 flex items-center justify-center">
          {/* {CAROUSEL} */}
          {
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full max-w-xs h-fit"
            >
              <CarouselContent className="-mt-1 h-[200px]">
                {
                  dataSlider.map(data =>(
                    <CarouselItem key={data.id} >
                      <div className="flex items-center justify-center ">
                        <Image src={data.url} alt="Image" width={250} height={400} className="w-full h-auto rounded-lg"  />
                      </div>
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          }
        </div>
        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white/80 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800 "
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-400">{data.description}</p>
              </div>
            ))}
          </div>
          <p className="my-8 text-justify">
            Soy un desarrollador apasionado que encuentra su mayor inspiracion
            entre lineas de codigo y algoritmos desafiantes. Cuando no estoy
            inmerso en la programacion, disfruto del aire libre y el deporte,
            creyendo firmemente en tener un equilibrio entre mente y cuerpo.
            Ademas, sou un avido lector, encontrando en los libros una fuente
            inagotable de conocimineto y crecimiento personal. En las redes
            sociales comparto mi pasion por la programacion, creadno contenido
            inspirador y educativo para conectar con otros apasionados del
            desarrollo de software.
          </p>
          <Button>
            <Phone size={20} className="mr-2" /> Hablamos
          </Button>
        </div>
      </div>
    </div>
  );
};
