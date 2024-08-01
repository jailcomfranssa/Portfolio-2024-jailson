"use client"
import{motion, AnimatePresence} from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {FaDesktop,FaGitSquare,FaPlay} from  "react-icons/fa"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const projects =[
    {
        num: '01',
        category: 'frontend',
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
        category: 'backend',
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
        category: 'fullstack',
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
        category: 'frontend',
        title: 'project 01',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo inventore. Quas itaque fugiat dolores.',
        stack:[{name:"Html 5"},{name:"Css 3"},{name:"Javascript"}],
        image: "/work/pg-construcao.png",
        live: "",
        github: "",
        youtube: "",
    }
] 

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="min-h-[80vh] flex flex-col justify-content py-12 xl:px-0"
        >
        <div className="container mx-auto">
            <div>
                <div>text</div>
                <div>slider</div>
            </div>
        </div>
    </motion.section>
    )
};

export default Work;