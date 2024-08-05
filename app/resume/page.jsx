"use client";
import React from "react";
import {
  FaAws,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaHtml5,
  FaNodeJs,
  FaGit,
  FaJenkins,
  FaStarOfLife,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** About dados */
const about = {
  title: "Sobre Mim",
  description:
    "Como programador júnior, estou ansioso para encontrar minha primeira oportunidade na área de desenvolvimento, onde poderei aplicar minha paixão por tecnologia e inovação para contribuir de maneira significativa e crescer profissionalmente.",
  info: [
    {
      fieldName: "Nome:",
      fieldValue: "Jailson S. de França",
    },
    {
      fieldName: "Tel.:",
      fieldValue: "(+55) 83 99942-3019",
    },

    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Email",
      fieldValue: "jailson.franca@academico.ifpb.edu.br",
    },
    {
      fieldName: "Freelance",
      fieldValue:
        "<span style='color: #0f9; font-weight: bold; font-style: oblique'> Disponível </span>",
    },
    {
      fieldName: "Idioma",
      fieldValue: "Português, Inglês, Espanhol",
    },
  ],
};

/** Experience data */
const experience = {
  icon: "/next.svg",
  title: "EXPERIÊNCIA PROFISSIONAL",
  description:
    "Sou um profissional experiente em desenvolvimento Front-End e Back-End com 4 anos de atuação como estagiário em empresas públicas e privadas.",
  items: [
    {
      company: "Justiça Federal da Paraíba",
      position: "Desenvolvedor full stack",
      duration: "2019 - 2021",
      atribuicoes: [
        "Participação em projetos desde a concepção até a implementação e melhorias dos serviços oferecidos pela instituição.",
        "Desenvolvimento de aplicações front-end utilizando Vue.js, JavaScript, HTML e CSS.",
        "Desenvolvimento back-end com Node.js, Python e MySQL.",
        "Utilização de Git para controle de versão.",
        "Adoção de metodologias ágeis para gestão de projetos e colaboração.",
      ],
      summary:
        "Essa experiência proporcionou conhecimentos valiosos sobre a aplicação prática dos princípios de programação e o uso de tecnologias relevantes.",
      skill: [
        "HTML","CSS","JavaScript","Node.js","Vue.js","SQL","GIT","Trello"
      ]
    },
    {
      company: "Dock Tech",
      position: "Analista de Qualidade (Q/A)",
      duration: "2021 - 2023",
      atribuicoes: [
        "Desenvolvimento de teste automatizado em API REST e desenvolvimento de Api.",
        "Testar, criar e desenvolver novas funcionalidades em projetos de automação.",
        "Desenvolver casos de teste utilizando Java como principal linguagem de programação.",
        "Utilizar ferramentas como Cucumber, TestNG, Rest Assured e Postman para automação de testes.",
        "Gerenciar o controle de versão e colaboração de código com Git.",
        "Utilizar MySQL para gerenciamento de banco de dados.",
        "Adoção de metodologias ágeis para gestão de projetos e colaboração."
      ],
      summary:
        "Nessa função, adquiri habilidades em testes de API, realizando análises minuciosas e garantindo a qualidade e eficiência das aplicações desenvolvidas.",
      skill: [
        "Java","Spring Boot","Cucumber","TestNG","Elaboração de testes","Automação de testes","SQL","GIT","Jira","Microsoft Azure",
      ]
    },
  ],
};

/** Education data */
const education = {
  icon: "/next.svg",
  title: "FORMAÇÃO ACADÊMICA",
  description:
    "O <span style='color: #0f9; font-weight: bold; font-style: oblique'>Instituto Federal de Educação, Ciência e Tecnologia da Paraíba</span> é uma instituição federal brasileira, vinculada ao Ministério da Educação, com a oferta de cursos da educação básica, profissional e superior, além de pós.",
  items: [
    {
      institution: "Instituto Federal da Paraíba (IFPB)",
      degree: "Sistema Para Internet",
      duration: "2018 - 2023",
      image: "/images/logo-ifpb.png",
    },
  ],
};

/** Skills data */
const skills = {
  title: "Skills",
  description:
    "Contínuo aprendendo e mantendo-me atualizado com as tecnologias relevantes em minha área.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3Alt />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaAws />,
      name: "aws",
    },
    {
      icon: <FaJenkins />,
      name: "Jenkins",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition:{ delay: 2.4, duration: 0.5, ease: "easeIn" },
}}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          <div className="min-h-[3vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl front-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[25px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[350px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline">Atribuições</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle className="mb-5">{item.company}</DialogTitle>
                              <DialogDescription>
                                {item.atribuicoes.map((atividade, idx) => (
                                  <p key={idx} className="flex  gap-2 mb-4 text-white/60">
                                    <span className="text-accent w-6 h-6">*</span>{atividade}
                                </p>
                                ))}
                                <p className="flex gap-2 text-white/60"><span className="text-accent w-6 h-6">-</span>{item.summary}</p>
                                <dir className="mb-6 mt-10 flex flex-wrap gap-2">
                                  {item.skill.map((sk, index) => (
                                    <Badge key={index} className="py-1 p-2 text-md">{sk}</Badge>
                                  ))}
                                  
                                </dir>
                                
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="sm:justify-start">
                              <DialogClose asChild>
                                <Button type="button" variant="outline">
                                  Close
                                </Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** EDUCAÇÃO */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl front-bold">{education.title}</h3>
                <p
                  className="max-w-[600px] text-white/60 mx-auto xl:mx-0"
                  dangerouslySetInnerHTML={{ __html: education.description }}
                ></p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[25px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] sm:h-[350px] lg:h-[200px] xl:h-[184px]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-between items-center lg:items-start gap-1 lg:flex-row-reverse"
                        >
                          <div className="w-[200px] h-[130px] rounded-full mb-4 lg:mb-0 lg:ml-4 relative">
                            <Image
                              src={item.image} // URL da sua image
                              alt={item.institution}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col items-center lg:items-start">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full mb-40">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[140px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left mb-40"
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[718px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 "
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span
                          className="text-sobre-me "
                          dangerouslySetInnerHTML={{ __html: item.fieldValue }}
                        ></span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
{
  /*<Badge>Badge</Badge>/*/
}
export default Resume;
