import imgHoem from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import { Character } from "./components/Character";

function App() {
  const [Characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const apicharacte = await api.json();
    setCharacters(apicharacte.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {Characters ? (
          <Character Characters={Characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imgHoem} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
