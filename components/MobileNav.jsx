"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: "Inicio",
        path: "/"
    },
    {
        name: "Serviços",
        path: "/services"
    },
    {
        name: "resumo",
        path: "/resume"
    },
    {
        name: "Cursos",
        path: "/course"
    },
    {
        name: "Projetos",
        path: "/work"
    },
    {
        name: "Contato",
        path: "/contact"
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries  className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-10 mb-20 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Jailson <span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>
            {/**nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, i) =>{
                    return (
                        <Link 
                            href={link.path} 
                            key={i} 
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>
};

export default MobileNav;