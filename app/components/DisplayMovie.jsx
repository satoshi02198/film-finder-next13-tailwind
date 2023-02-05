"use client";
import React, { useState, useEffect } from "react";
import GenreButtonFunc from "./GenreButtonFunc";
import Movie from "./Movie";

const DisplayMovie = () => {
  const [genreId, setGenreId] = useState(null);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const tmdbBaseUrl = "https://api.themoviedb.org/3";
      const discoverPopularMovie = "/movie/popular";
      const requestParams = `?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genreId}`;
      const urlToFetch = `${tmdbBaseUrl}${discoverPopularMovie}${requestParams}`;
      try {
        const res = await fetch(urlToFetch);
        if (res.ok) {
          const jsonRes = await res.json();
          const movies = jsonRes.results;
          setMovie(movies);
          console.log(movies);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [genreId]);

  const changeGenre = (id) => {
    setGenreId(id);
  };
  //   <GenreButtonFunc />

  return (
    <>
      <GenreButtonFunc changeGenre={changeGenre} genreId={genreId} />
      <div className="grid gap-16 grid-cols-fluid mx-5 my-7">
        {movie.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </>
  );
};

export default DisplayMovie;
