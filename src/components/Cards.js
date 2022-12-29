import React from "react";
import "./Cards.css";

const Cards = ({ movie }) => {
  const id = movie.id;
  return (
    <div className="card-div">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.path}
      />
      <div className="card-content">
        <div id="circle"><b>{movie.vote_average * 10}</b>{<sub>%</sub>}</div>
      <p><a href={`https://www.themoviedb.org/movie/${id}`} target="_blank" rel="noreferrer"> {movie.title.length > 27 ? movie.title.substr(0, 27)+"..." : movie.title}</a></p>
      <p>{movie.release_date}</p></div>
    </div>
  );
};
export default Cards;
