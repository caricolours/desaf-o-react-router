import { createContext, useEffect, useState } from "react"
export const MyPokeContext = createContext();

const PokemonesProvider = ({children}) => {

    const [pokemones, setPokemones] = useState([]);
    const [selectPokemon, setSelectPokemon] = useState('');

    const obtenerPokemones = async () => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100");
            const data = await res.json();
            setPokemones(data.results)
            //setSelectPokemon(data)
        } catch (error) {
            console.error('Error al obtener pokemones:', error)

        }
    };

    useEffect(() => {
        obtenerPokemones();
    }, []);

    const useSelectPokemon = (pokemon) => {
        setSelectPokemon(pokemon);
    }

    return (
        <MyPokeContext.Provider value={{ pokemones, selectPokemon, useSelectPokemon }}>
            {children}
        </MyPokeContext.Provider>
    )
};

export default PokemonesProvider;