"use client"
import{motion} from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {FaDesktop,FaGitSquare,FaPlay} from  "react-icons/fa"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import WorkSliderBtns from "@/components/WorkSliderBtns"

/**Base */
const projects =[
    {
        num: '01',
        category: 'frontend-01',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    },
    {
        num: '02',
        category: 'backend-02',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    },
    {
        num: '03',
        category: 'fullstack-03',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    },
    {
        num: '04',
        category: 'frontend-04',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    },
    {
        num: '05',
        category: 'frontend-05',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    },
    {
        num: '06',
        category: 'frontend-06',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    },
    {
        num: '07',
        category: 'frontend-07',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    },
    {
        num: '08',
        category: 'frontend-08',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    },
    {
        num: '09',
        category: 'frontend',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    },
    

] 
/** #################################################### */

/** Função utilitária para formatar números com zeros à esquerda */
const formatNumber = (num, length) => {
    return String(num).padStart(length, '0');
};

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) =>{
        //get current slide index
        const currentIndex = swiper.activeIndex;

        //update project state based on current slide index
        setProject(projects[currentIndex])
    }
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
            className="min-h-[80vh] flex flex-col justify-content py-12 xl:px-0"
        >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%]  xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/**outline numero */}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project.num} 
                            <span className="text-6xl p-5">-</span> 
                            {formatNumber(projects.length, 2)}
                        </div>
                        {/**project category */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category} Projeto
                        </h2>
                        {/*project description*/}
                        <p className="text-white/60">{project.description}</p>
                        {/*stack*/}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index)=>{
                                return(
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                )
                            })}
                        </ul>
                        {/* Border */}
                        <div className="border border-white/20"></div>
                        {/* button  FaDesktop,FaGitSquare,FaPlay*/}
                        <div className="flex items-center gap-4">
                            {/** site project  button */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <FaDesktop className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Ver project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>

                            {/**Github project button */}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <FaGitSquare className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>

                            {/**youtube project button */}
                            <Link href={project.youtube}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <FaPlay className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>YouTube </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper 
                        spaceBetween={30} 
                        slidesPerView={1} 
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}>
                        {projects.map((project, index)=>{
                            return(
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/**Overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    {/**Image */}
                                    <div className="relative w-full h-full">
                                        <Image src={project.image} fill className="object-cover" alt=""/>
                                    </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                        {/**slider buttons */}
                        <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section>
    )
};

export default Work;