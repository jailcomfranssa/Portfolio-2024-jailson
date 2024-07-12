"use client"
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs"

const services = [
    {
        num: "01",
        title: "Web Developer",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere illo",
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere illo",
        href: ""
    },
    {
        num: "03",
        title: "Logo Design",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere illo",
        href: ""
    },
    {
        num: "04",
        title: "SEO",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere illo",
        href: ""
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, 
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } 
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                {/**TOP */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-90">       
                                        <BsArrowDownRight className="text-primary text-3xl"/> 
                                    </Link>
                                </div>
                                {/**TITLE */}
                                <h2 className="text-[39px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/**DESCRIPTION */}
                                <p className="text-white/60">{service.Description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
