import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';




function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const request = "https://pokeapi.co/api/v2/pokemon?limit=807";

    const getPokemonsLists = async () => {
      try {
        const response = await fetch(request, { method: "GET" });

        if (!response.status) {
          throw new Error("Erreur de récupération des données");
        }

        const result = await response.json();

        setPokemons(result.results);

      } catch (error) {
        console.log("error message++", error.message);
        setPokemons([]);
      }
    };

    getPokemonsLists();
  }, []);

  return (
    <div className="PokemonLists">
      <h1>All pokemons</h1>
      <ul>
        {
          pokemons.map((elt, index) => <li key={index} className="pokemon">{elt.name}</li>)
        }
      </ul>
    </div>
  );
}

Pokemon.propTypes = {};

Pokemon.defaultProps = {};

export default Pokemon;
