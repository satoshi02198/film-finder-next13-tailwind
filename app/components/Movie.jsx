import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, relese_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h2>{relese_date}</h2>
      <Link href={`/asff`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
