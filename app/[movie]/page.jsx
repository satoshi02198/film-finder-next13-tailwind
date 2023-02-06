import Image from "next/image";
import Link from "next/link";

export default async function MOvieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const res = await data.json();
  console.log(res);

  const p = "text-lg border-b-2 border-lime-900 my-2";
  const h1 = "text-xl text-center font-bold";

  return (
    <div className=" flex justify-center mt-7">
      <div className="w-[90%] max-w-screen-lg flex flex-col items-center">
        <Image
          src={imagePath + res.backdrop_path}
          width={700}
          height={700}
          alt={res.title}
        />
        <p className="text-lg border-b-2 border-lime-900 my-2 ">Title</p>
        <h1 className="text-xl text-center font-bold">{res.title}</h1>
        <p className={p}>Release Date</p>
        <h1 className={h1}>{res.release_date}</h1>
        <p className={p}>Run Time</p>
        <h1 className={h1}>{res.runtime} min</h1>
        <p className={p}>Over View</p>
        <h1 className="text-xl text-center my-2 max-w-2xl leading-8">
          {res.overview}
        </h1>

        {res.homepage ? (
          <Link
            href={`${res.homepage}`}
            target="_blank"
            className=" text-center mb-5 mt-4 w-[60%] py-2.5 bg-zinc-500 font-medium text-lg leading-normal rounded-md shadow-md hover:bg-zinc-400 hover:shadow-lg fucus:bg-zinc-400 focus:ring-0 active:bg-zinc-600 active:shadow-xl transition duration-150 ease-in-out"
          >
            <button>Official Site</button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
{
  /* <Link
          href={`${res.homepage}`}
          target="_blank"
          className="w-full text-center"
        >
          <button className="mt-4 w-[60%] py-2.5 bg-zinc-500 font-medium text-lg leading-normal rounded-md shadow-md hover:bg-zinc-400 hover:shadow-lg fucus:bg-zinc-400 focus:ring-0 active:bg-zinc-600 active:shadow-xl transition duration-150 ease-in-out">
            Official Site
          </button>
        </Link> */
}
