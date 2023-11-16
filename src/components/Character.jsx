export const Character = (props) => {
  const { Characters, setCharacters } = props;

  const Resetpersonajes = () => {
    setCharacters(null);
  };

  return (
    <>
      <div className="characters">
        <h1>Personajes</h1>
        <span className="btn-search" onClick={Resetpersonajes}>
          Volver a Home
        </span>
        <div className="container-characters">
          {Characters.map((personajes, index) => (
            <div className="character-container" key={index}>
              <div className="">
                <img src={personajes.image} alt={personajes.name} />
              </div>
              <div>
                <h3>{personajes.name}</h3>
                <h6>
                  {personajes.status === "Alive" ? (
                    <>
                      <span className="alive" />
                      vive
                    </>
                  ) : (
                    <>
                      <span className="dead" />
                      muerto
                    </>
                  )}
                </h6>
                <p>
                  <span className="text-grey">Episodio: </span>
                  <span>{personajes.episode.length}</span>
                </p>
                <p>
                  <span className="text-grey">Especies: </span>
                  <span>{personajes.species}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <span className=" btn-search" onClick={Resetpersonajes}>
          Volver a Home
        </span>
      </div>
    </>
  );
};
