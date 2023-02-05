"use Client";
import React from "react";

const GenreButtons = ({ id, name, changeGenre, genreId }) => {
  const handleClick = (e) => {
    changeGenre(e.target.value);
  };
  // px-6 py-2 border-2 border-gray-800  text-gray-700 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-1 transition duration-150 ease-in-out

  return (
    <>
      <button
        onClick={handleClick}
        value={id}
        className="px-6 py-2 border-2 border-gray-200  
                    text-gray-900 font-medium text-xs leading-tight rounded bg-gray-300
                    hover:bg-gray-50 hover:bg-opacity-70 focus:outline-none focus:ring-1 
                    focus:bg-lime-100 transition duration-150 ease-in-out"
      >
        {name}
      </button>
    </>
  );
};

export default GenreButtons;
