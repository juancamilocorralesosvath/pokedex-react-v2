import React, {useState, useEffect} from 'react';
import PokemonCard from '../components/PokemonCard';
import { getPokemons } from '../services/pokemons';

const AllPokemon = () => {
    //en la linea 19 y 20, no entiendo bien de donde sale el index ... hmmm ?
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        getPokemons().then((data)=>{
            setPokemons(data);
        });
    }, []);
    console.log(pokemons);
    console.log(Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1]);
    return(
        <div>
            <div> 
                {Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1].map((pokemon, index)=>{
                    return <PokemonCard key={index} {...pokemon} id={index + 1} />;
                })}
            </div>
        </div>
    );
};

export default AllPokemon;