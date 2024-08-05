"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon:<FaPhoneAlt/>,
        title: "Phone",
        description: "(+55) 83 99942-3019"
    },
    {
        icon:<FaEnvelope/>,
        title: "Email",
        description: "jailson@example.com"
    },
    {
        icon:<FaMapMarkedAlt/>,
        title: "João Pessoa - PB",
        description: "58050-005"
    },
]

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition:{ delay: 2.4, duration: 0.5, ease: "easeIn" },
        }}
            className="py-6"  
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/**Form */}
                    <div className="xl:w-[74%] order-2 xl:order-none">
                        <form className="flex flex-col gap-2 p-2 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-nowrap/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            {/**input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="nome" placeholder="Nome"/>
                                <Input type="sobre" placeholder="Sobre nome"/>
                                <Input type="email" placeholder="E-mail"/>
                                <Input type="telefone" placeholder="Telefone"/>
                            </div>
                            {/**Select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent className="flex flex-col gap-4">
                                    <SelectGroup>
                                        <SelectLabel>Selecione um Serviço</SelectLabel>
                                        <SelectItem value="service1">Web Development</SelectItem>
                                        <SelectItem value="service2">UI/UX Design</SelectItem>
                                        <SelectItem value="service3">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/**Textarea */}
                            <Textarea placeholder="Mensagem" className="h-[200px]"/>
                            {/**Button */}
                            <Button size="md" className="max-w-40">Enviar</Button>
                        </form>
                    </div>
                    
                    {/**info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) =>{
                                return(
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>

        </motion.section>
    )
};

export default Contact;