import React from 'react';

const FilmItem = (props) => {
  const film = props.film;

  return (
    <div key={film.id} className="c-FilmItem">
      <div className="c-FilmItem_Img"></div>
      <div className="c-FilmItem_Text">
        <h2>{film.title}</h2>
        <p>{film.release_date}</p>
        <p>{film.description}</p>
        <p>{film.director}</p>
        <p>score: {film.rt_score}</p>
      </div>
    </div>
  )
}

export default FilmItem;