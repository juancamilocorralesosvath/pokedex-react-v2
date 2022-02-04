export const getPokemon = (props) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`).then((response)=> response.json());
};