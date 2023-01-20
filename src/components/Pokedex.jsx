import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const userName = useSelector( state => state.userName)
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        axios
            .get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setPokemons(res.data.results))
    },[])
    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {userName}</p>
            <ul>
            {
            pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.url} url={pokemon.url}/>
            ))}
            </ul>
        </div>
    );
};

export default Pokedex;