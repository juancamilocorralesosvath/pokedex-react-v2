import React,{useState, useEffect} from "react";
import { getPokemon } from "../services/pokemon_for_pokecards";
import { NavLink } from "react-router-dom";
const PokemonCard = (props) => {
    const [pokemon, setPokemon] = useState({});
    const [image, setImage] = useState({})
    useEffect(()=>{
        getPokemon(props).then((data)=>{
            setPokemon(data);
            setImage(data.sprites);
        });
    },[]);
   
    return(
                                    /* in this way, we now have acces to our data with <location> */
        <NavLink className="card" to={{ pathname: `/pokemon/${pokemon.id}`, pokemon: {...pokemon} }} >
            <h1 className="card__title" >{pokemon.name}</h1>
            <img className="card__img" src={image.front_default} ></img>
         </NavLink>
    );
}
export default PokemonCard;