import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PokemonLists.css";

export default class PokemonLists extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [] };
  }

  async componentDidMount() {
    // take Pokemons Data
    const request = "https://pokeapi.co/api/v2/pokemon?limit=807";

    const getPokemonsLists = async () => {
      try {
        const response = await fetch(request, { method: "GET" });

        /*if (!response.status) {
          throw new Error("Erreur de récupération des données");
        } */

        const result = await response.json();
        this.setState({ pokemons: result.results });

      } catch (error) {
        console.log("error message++", error.message);
        this.setState({ pokemons: [] });
      }
    };

    getPokemonsLists(); // call function
  }

  render() {
    return (
      <div className="PokemonLists">
        <h1>All pokemons</h1>
        <ul>
          {
            this.state.pokemons.map((elt, index)=> <li key={index} className="pokemon">{ elt.name }</li>)
          }
        </ul>
      </div>
    );
  }
}

PokemonLists.propTypes = {};

PokemonLists.defaultProps = {};
