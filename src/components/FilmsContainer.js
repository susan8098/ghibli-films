import React from 'react';
import FilmItem from './FilmItem';

const FilmsContainer = (props) => {
    const filmsArr = props.filmData;
    console.log(filmsArr);

    return (
        <div className="g-Container c-FilmContainer">
            {filmsArr.map( (film, i) => {
                return <FilmItem film={film} key={i} />
            })}
        </div>
    )
}

export default FilmsContainer;
