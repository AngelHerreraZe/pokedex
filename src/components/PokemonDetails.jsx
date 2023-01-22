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

    console.log(pokemon);

    return (
        <div>
            <section className='details'>

                <div className='details-nav'>
                    <p>Pokedex</p>
                </div>

                <h1 className="details-title">{pokemon.name}</h1>
                <p className="details-subtitle"></p>

                <div className="details-box">

                    <div className="details-box-content">

                        <h1>Id: #{pokemon.id}</h1>
                        <h1>Height: {pokemon.height} m</h1>
                        <h1>Weight: {pokemon.weight} kg</h1>
                        <h1>Abilities: {pokemon.abilities?.[0].ability.name} <br />{pokemon.abilities?.[1].ability.name}</h1>
                        <h1>Type: {pokemon.types?.[0].type.name} {pokemon.types?.[1].type.name} </h1> 
                        <h1>Forms: {pokemon.forms?.[0].name}</h1>


                    </div>
                    <div className="detail-box-image">

                        <img className="detail-img" src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                    </div>

                    <div className="detail-box-bars">

                        <h1>Pokedex detail</h1>

                    </div>
                </div>
                
              
            </section>
            
        </div>
    );
};

export default PokedexDetail;