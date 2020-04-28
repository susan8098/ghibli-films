import React from 'react';
import FilmItem from './FilmItem';

const FilmsContainer = (props) => {
    const filmsArr = props.filmData;
    console.log(filmsArr);

    return (
        <main>
            <div className="g-Container">
                {filmsArr.map( (film, i) => {
                    return <FilmItem film={film} key={i} />
                })}
            </div>
        </main>
    )
}

export default FilmsContainer;
