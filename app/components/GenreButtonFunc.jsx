"use client";
import React, { useState, useEffect } from "react";
import GenreButtons from "./GenreButtons";

const GenreButtonFunc = ({ changeGenre, genreId }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenre = async () => {
      const tmdbBaseUrl = "https://api.themoviedb.org/3";
      const genreRequestEndpoint = "/genre/movie/list";
      const requestParams = `?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
      const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

      try {
        const res = await fetch(urlToFetch);
        if (res.ok) {
          const jsonRes = await res.json();
          const genres = jsonRes.genres;
          setGenres(genres);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getGenre();
  }, []);

  const renderButtons = genres.map((genre) => {
    return (
      <GenreButtons
        key={genre.id}
        id={genre.id}
        name={genre.name}
        changeGenre={changeGenre}
        genreId={genreId}
      />
    );
  });

  return (
    <div className="flex justify-center">
      <div className="flex space-x-2 justify-center items-center  flex-wrap max-w-screen-lg my-5">
        {renderButtons}
      </div>
    </div>
  );
};

export default GenreButtonFunc;
