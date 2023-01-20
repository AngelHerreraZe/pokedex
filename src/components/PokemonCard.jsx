import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon,setPokemon] =useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get(url)
            .then(res => setPokemon(res.data))
    },[])

    return (
        <div onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <ul>
                <li>{pokemon.name}</li>
                <img src={pokemon.sprites?.front_shiny} alt="" />
            </ul>
        </div>
    );
};

export default PokemonCard;