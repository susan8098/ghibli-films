import React from 'react';

const FilmItem = (props) => {
  const film = props.film;

  return (
    <div key={film.id}>
      <h2>{film.title}</h2>
      <p>{film.release_date}</p>
      <p>{film.description}</p>
      <p>{film.director}</p>
      <p>score: {film.rt_score}</p>
    </div>
  )
}

export default FilmItem;