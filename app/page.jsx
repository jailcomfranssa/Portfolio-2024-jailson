"use client"
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import {useTypewriter, Cursor} from "react-simple-typewriter";
import { motion } from "framer-motion";
import Stats from "@/components/Stats";

export default function Home() {

  const [text] = useTypewriter({
    words: [ "Web Designer", "Front end Developer", "Back end Developer", "QA Software Engineer"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 120,
    
  })

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/**Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
          <motion.div initial={{opacity:0}} 
                    animate={{opacity:1, transition:{delay:2, duration:0.4, ease: "easeIn"} 
                    }}>
            
            <h1 className="h1 mb-6">
            👋 Olá Eu sou <br /> <span className="text-accent"> Jailson França</span>
            </h1>
            <span className="text-xl text-white xl:text-[25px] font-bold">
              {text}
            </span>
            <span className="text-accent xl:text-[25px]">
            
                      <Cursor cursorStyle="✍️" cursorBlinking={false}/>
            
              
            </span>
            <p className="max-w-[500px] mb-9 text-white/80">
              Estou em busca de uma oportunidade para aplicar os meus conhecimentos e contribuir para projetos inovadores. 
              Tenho confiança em explorar diversas tecnologias e linguagens de programação. 
              Sou comprometido, responsável e estou sempre em busca de aprimoramento.
            </p>
            {/*btn and socials mid.*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/cv/full_stack.pdf" download="Jailson_S.de_França.pdf">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </motion.div>
          </div>

          {/* photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
       {/**<Stats /> */} 
    </section>
  );
}
