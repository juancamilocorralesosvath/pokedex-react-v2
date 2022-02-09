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
    // to see what we got: console.log(pokemons);
    // to see our condition: console.log(Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1]);
    return(
       
            <div className='cards' > 
            {/* todo: console log del index para ver que es lo que pasa */}
                {Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1].map((pokemon, index)=>{
                    //console.log('from allpokemon, this is the index item:',index, 'this is the pokemon item:',pokemon)
                    return <PokemonCard key={index} {...pokemon} id={index + 1} />;
                })}
            </div>
    );
};

export default AllPokemon;