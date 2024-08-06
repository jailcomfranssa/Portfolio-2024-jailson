import Link from "next/link";
import { Button } from "./ui/button";
import NavDesktop from './Nav';
import MobileNav from "@/components/MobileNav";


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container max-auto flex justify-between items-center">
                {/** logo */}
                <Link href="/">
                    <h1 className="text-4xl front-semibold">
                        Jailson 
                        <span className="text-accent" >.</span>
                    </h1>
                </Link>
                {/** Desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <NavDesktop/>
                    <Link href="/contact">
                        <Button >Contrate-me</Button>
                    </Link>
                </div>

                {/* mobile nav*/}
                <div className="xl:hidden"> 
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;