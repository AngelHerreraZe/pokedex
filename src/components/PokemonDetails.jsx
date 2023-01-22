import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from './NotFound';

const PokedexDetail = () => {

    const { id } = useParams();
    const [pokemon,setPokemon] = useState({});
    const navigate = useNavigate();
    
    // console.log(pokemon);

    useEffect(()=>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
            .catch(() => navigate("/notFound"))
    },[])

    return (
        <div>
            <h1>Pokedex detail</h1>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokedexDetail;