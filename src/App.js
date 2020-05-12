import React from "react";
import useApiData from './hooks/useApiData';

import FilmsContainer from './components/FilmsContainer';

import './App.css';

function App() {
  const ghibliApi = 'https://ghibliapi.herokuapp.com/';

  const [ data, isLoading ] = useApiData(ghibliApi);

  return (
    <>
      <header>
        <div className="g-Container">
          <h1>Ghibli Films</h1>
        </div>
      </header>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        data && (
          <main>
            <FilmsContainer filmData={data} />
          </main>
        )
      )}

    </>
  );
}

export default App;
