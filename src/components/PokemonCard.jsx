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

    console.log(pokemon);

    return (
        <div className='pokemon-card' onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
                <img className='pokemon-card-img' src={pokemon.sprites?.front_shiny} alt="" />
                <p className='pokemon-card-name'>{pokemon.name}</p>
                <p>{pokemon.types?.name}</p>
                <div className='stats'>
                    <div className='stats-item'>
                        <p className='stats-item-title'>HP</p>
                        <p className='stats-item-value'>{pokemon.stats?.[0].base_stat}</p>
                    </div>
                    <div className='stats-item'>
                        <p className='stats-item-title'>ATAQUE</p>
                        <p className='stats-item-value'>{pokemon.stats?.[1].base_stat}</p>
                    </div>
                    <div className='stats-item'>
                        <p className='stats-item-title'>DEFENSA</p>
                        <p className='stats-item-value'>{pokemon.stats?.[2].base_stat}</p>
                    </div>
                    <div className='stats-item'>
                        <p className='stats-item-title'>VELOCIDAD</p>
                        <p className='stats-item-value'>{pokemon.stats?.[5].base_stat}</p>
                    </div>
                </div>
        </div>
    );
};

export default PokemonCard;