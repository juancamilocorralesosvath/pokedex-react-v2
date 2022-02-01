import React,{useState, useEffect} from "react";
import { getPokemon } from "../services/pokemon";
const PokemonCard = (props) => {
    const [pokemon, setPokemon] = useState({});
    const [image, setImage] = useState({})
    useEffect(()=>{
        getPokemon(props).then((data)=>{
            setPokemon(data);
            setImage(data.sprites)
        });
    },[]);
   
    return(
        <div>
            <h1>{pokemon.name}</h1>
            <img src={image.front_default} ></img>
            <img src={image.back_default} ></img>
         </div>
    );
}
export default PokemonCard;