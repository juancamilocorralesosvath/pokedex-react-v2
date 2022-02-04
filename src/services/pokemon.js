
export const getPokemon = (props) => {
    return fetch(`https://pokeapi.co/api/v2${props}`).then((response)=> response.json());
};