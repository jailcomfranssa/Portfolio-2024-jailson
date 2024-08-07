import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const CourseCard = ({ item }) => (
  <div className="relative group">
    <Image
      src={item.image}
      alt={`Imagem do curso ${item.title}`}
      width={500}
      height={500}
      className="rounded-lg h-full w-full object-cover group-hover:opacity-75 transition-opacity duration-300"
      loading="lazy"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Link href={item.link} target="_blank" className="text-4xl text-accent">
        <FiExternalLink
          className="w-12 h-12"
          aria-label={`Link para ${item.title}`}
        />
      </Link>
    </div>
  </div>
);

export default CourseCard;
