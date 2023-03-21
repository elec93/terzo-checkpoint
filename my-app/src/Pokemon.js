import React, { useEffect, useState } from "react";

function Pokemon({ pokeName }) {
  const [infoPoke, setInfoPoke] = useState(null);
  const [error, setError] = useState(null);

  async function getPokemon(pokeName) {
    try {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const json = await resp.json();
      console.log(json);
      setInfoPoke(json);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getPokemon(pokeName);
  }, [pokeName]);

  return (
    <div>
      {infoPoke && <h1>{infoPoke.name}</h1>}
      {infoPoke && <img src={infoPoke.sprites?.front_default}/>}
      {infoPoke && <p>{infoPoke.base_experience}</p>}
      {infoPoke && (
        <ul>
          {infoPoke.abilities.map((item, index) => {
            return <li key={item + index}>{item.ability.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Pokemon;
