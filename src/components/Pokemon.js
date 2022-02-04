import React, { useState, useEffect } from "react";
import { getPokemon } from '../services/pokemon';
import { useLocation } from "react-router-dom";
const Pokemon = (props) =>{
    const location = useLocation();
    console.log('from Pokemon.js, this is location thing:',location);
    const [pokemon, setPokemon] = useState([]);
    useEffect(()=>{
        getPokemon(location.pathname).then((data) =>{
            console.log('from Pokemon.js, this is the fetched data:', data)
            setPokemon(data);
            console.log(data.sprites)
        });
    },[location.pathname]);

    const{
        id, 
        name,
        height,
        base_experience,
        weight,
        abilities,
        stats,
        types,

    } = pokemon;


    return(
        <div>
            <h1>{name}</h1>
            <img className="card__img" src={pokemon.sprites && pokemon.sprites.front_default} alt="pokemon-pic" ></img>
            <ul>
                <li>Height: {height}</li>
                <li>Weight: {weight}</li>
                <li>Base XP: {base_experience}</li>
            </ul>
            <ul>
                Abilities:
                {pokemon.abilities && pokemon.abilities.map((ability, index)=>{
                                            //john: could you please explain me what is going on here?
                    return <li key={index} >{ability['ability']['name']}</li>;
                })}
            </ul>
            <ul>
                stats:
                {pokemon.stats && pokemon.stats.map((stat, index)=>{
                    return (
                    <li key={index} >
                        {stat['stat']['name']}: <span>{stat.base_stat}</span>
                    </li>
                    );
                })}
            </ul>
            <ul>
                Types:
                {pokemon.types &&  pokemon.types.map((type, index)=>{
                    return <li key={index} >{type['type']['name']}</li>;
                })}
            </ul>
        </div>
    );
};
export default Pokemon;