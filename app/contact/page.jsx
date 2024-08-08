"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        service: "",
        mensagem: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Verificar se todos os campos estão preenchidos
        if (!formData.nome || !formData.sobrenome || !formData.email || !formData.telefone || !formData.service || !formData.mensagem) {
            setError("Preencha todos os campos.");
            return;
        }

        setIsLoading(true);

        emailjs.send(
            'service_4t2bcte', // Substitua pelo seu service ID
            'template_1am4eje', // Substitua pelo seu template ID
            formData,
            'lZEsL_XIkpduhbm1X' // Substitua pelo seu user ID
        ).then((result) => {
            console.log('Mensagem enviada com sucesso!', result.text);
            setIsSent(true);
            setFormData({
                nome: "",
                sobrenome: "",
                email: "",
                telefone: "",
                service: "",
                mensagem: ""
            });
        }, (error) => {
            console.log('Erro ao enviar a mensagem.', error.text);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const info = [
        {
            icon:<FaPhoneAlt/>,
            title: "Telefone",
            description: "(+55) 83 99942-3019"
        },
        {
            icon:<FaEnvelope/>,
            title: "Email",
            description: "jailson.franca@dcx.ufpb.br"
        },
        {
            icon:<FaMapMarkedAlt/>,
            title: "João Pessoa - PB",
            description: "58050-005"
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition:{ delay: 2.4, duration: 0.5, ease: "easeIn" }}}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/** Form */}
                    <div className="xl:w-[74%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-2 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Você tem alguma dúvida?</h3>
                            <p className="text-nowrap/60">MANDE-ME UM EMAIL</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
                                <Input type="text" name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} />
                                <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
                                <Input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
                            </div>
                            <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione um serviço" />
                                </SelectTrigger>
                                <SelectContent className="flex flex-col gap-4">
                                    <SelectGroup>
                                        <SelectLabel>Selecione um Serviço</SelectLabel>
                                        <SelectItem value="Front-end Development">Front-end Development</SelectItem>
                                        <SelectItem value="Back-end Development">Back-end Development</SelectItem>
                                        <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
                                        <SelectItem value="QA Test Engineer">QA Test Engineer</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea name="mensagem" placeholder="Mensagem" value={formData.mensagem} onChange={handleChange} className="h-[200px]" />
                            
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                            {isSent && <p className="text-green-500 mt-2">Mensagem enviada com sucesso!</p>}

                            <Button size="md" type="submit" className="max-w-40" disabled={isLoading}>
                                {isLoading ? 'Enviando...' : 'Enviar'}
                            </Button>
                        </form>
                    </div>
                    
                    {/** Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
