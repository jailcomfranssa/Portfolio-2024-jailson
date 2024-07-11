import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/jailcomfranssa"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/jailson-s-de-franca/"},
    {icon: <FaYoutube/>, path: "https://www.youtube.com/channel/UC1YaFhiY2FB6Dk_e1c_Ywug"},
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) =>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
        
    </div>
};

export default Social;
