import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PokemonLists.css";

export default class PokemonLists extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [] };
  }

  async componentDidMount() {
    // take Pokemons
    const request = "https://pokeapi.co/api/v2/pokemon";

    const getPokemonsLists = async () => {
      try {
        const response = await fetch(request, { method: "GET" });

        if (!response.ok) {
          throw new Error("Erreur de récupération des données");
        }

        const result = await response.json();

        return result;

      } catch (error) {
        console.log("error message++", error.message);
        return [];
      }
    };

    const pokemonsFinal = await getPokemonsLists();
    this.setState({ pokemons: pokemonsFinal.results });
  }

  render() {
    return (
      <div className="PokemonLists">
        <h1>All pokemons</h1>
        <ul>
          {
           this.state.pokemons.map((elt, index)=> <li key={index} className="pokemon">{elt.name}</li>)
          }
        </ul>
      </div>
    );
  }
}

PokemonLists.propTypes = {};

PokemonLists.defaultProps = {};
