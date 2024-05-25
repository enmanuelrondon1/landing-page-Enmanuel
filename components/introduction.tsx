import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import { Container } from "./shared/container";

const Introduction = () => {
  return (
      <Container>
        <div className="text-center id='home ">
          <h3 className="text-xl mb-3">Hello I am</h3>
          <h1 className="text-4xl font-bold mb-3">Ing-Enmanuel 🎓</h1>
          <h2 className="text-2xl text-gray-400">Fronted Developer</h2>
          <div className="flex items-center">
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
              <Link href="#contact" className={buttonVariants()}>
                <Mail className="mr-2" /> Contacta conmigo
              </Link>
              <Link
                href="/cv-tarre.pdf"
                className={buttonVariants({ variant: "secondary" })}
                target="_blank"
              >
                <Paperclip className="mr-2" /> Descargar CV
              </Link>
            </div>
          </div>
          <Image
            src='https://i.ibb.co/169p3N2/enmanuel.jpg'
            alt="Profile pic"
            width={100}
            height={100}
            className="rounded-full h-52 w-52 mt-5 m-auto "
          />
        
        </div>
      </Container>
  );
};

export default Introduction;
