import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

const Pokedex = () => {
  const [data, setData] = useState([""]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => setData(res.data.results));
  }, []);
  return (
    <section id="pokedex">
      { data.map((pokemon) => ( <Pokemon key={pokemon.name} pokemon={pokemon} />))}
    </section>
  );
};

export default Pokedex;