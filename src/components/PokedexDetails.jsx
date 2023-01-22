import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import icon from '../assets/icon.png'

const PokedexDetail = () => {

    const { id } = useParams();
    const [pokemon,setPokemon] = useState({});
    const navigate = useNavigate();
    const moves = [];



    useEffect(()=>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
            .catch(() => navigate("/notfound"))
    },[])

    const getMovements = () => {
        for (let i = 0; i <= pokemon.moves.length; i++){
            moves.push(pokemon.moves?.[i].move.name);
        }
    }

    const hp = (pokemon.stats?.[0].base_stat * 100) / 150;
    const atack = (pokemon.stats?.[1].base_stat * 100) / 150;
    const defense = (pokemon.stats?.[2].base_stat * 100) / 150;
    const speed = (pokemon.stats?.[5].base_stat * 100) / 150;

    console.log(hp);

    return (
        <div className='pokedex'>
            <div className='pokedex-header'>
                <img src={icon} alt="" className='pokedex-icon-header'/>
                <div className='pokedex-header-black'></div>
                <div className='input-name-pokedex-circle'></div>
                <div className='input-name-pokedex-circle-mid'></div>
            </div>
            <div className='pokedex-details-body'>
                <div className='pokemon-details'>
                <div className='pokemon-detail-bar'><img className='pokemon-img' src={pokemon.sprites?.other.dream_world.front_default} alt="" /></div>
                    <p> # {pokemon.id}</p>
                    <h2>{pokemon.name}</h2>
                    <div>
                        <p>Peso</p>
                        <p>Altura</p>
                        {pokemon.weight}
                        {pokemon.height}
                    </div>
                    {pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}
                    {pokemon.abilities?.[0].ability.name} / {pokemon.abilities?.[1].ability.name}
                    <h3>Stats</h3>
                    <div className='stats-item'>
                         <div className='stats-title'>
                            <p>HP</p>
                            <p>{pokemon.stats?.[0].base_stat} / 150</p>
                        </div>
                        <div className='progress'>
                            <div className='progress-content' style={{width: `${hp}%`}}>
                            </div>
                        </div>
                    </div>
                    <div className='stats-item'>
                        <div className='stats-title'>
                            <p>Ataque</p>
                            <p>{pokemon.stats?.[1].base_stat} / 150</p>
                        </div>
                        <div className='progress'>
                            <div className='progress-content' style={{width: `${atack}%`}}>
                        </div>
                        </div>
                    </div>
                    <div className='stats-item'>
                        <div className='stats-title'>
                            <p>Defensa</p>
                            <p>{pokemon.stats?.[2].base_stat} / 150</p>
                        </div>
                        <div className='progress'>
                            <div className='progress-content' style={{width: `${defense}%`}}>
                        </div>
                        </div>
                    </div>
                    <div className='stats-item'>
                        <div className='stats-title'>
                            <p>Velocidad</p>
                            <p>{pokemon.stats?.[5].base_stat} / 150</p>
                        </div>
                        <div className='progress'>
                            <div className='progress-content' style={{width: `${speed}%`}}>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className='moves'>
                <h3 className='moves-title'>Movements</h3>
                    {
                        pokemon.moves?.map(move => (
                            <p className='move-item' key={move.move.url}>{move.move.name}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PokedexDetail;