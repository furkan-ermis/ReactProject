import React, { useState } from "react";

function WatchMovie({ movie, getMovie, isMovie }) {
  return (
    <>
      {isMovie ? (
        <button
          onClick={() => getMovie(movie)}
          className="btn btn-outline-info p-2"
        >
          Watch Trailer
          <span>&nbsp; &nbsp;</span>
        </button>
      ) : (
        <button
          onClick={() => getMovie(movie)}
          className="btn btn-outline-danger p-2"
        >
          Watch Movie
          <span>&nbsp; &nbsp;</span>
        </button>
      )}
    </>
  );
}

export default WatchMovie;
