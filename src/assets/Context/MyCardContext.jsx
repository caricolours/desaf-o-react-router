import { createContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
export const MyCardContext = createContext();

const CardsProvider = ({children}) => {

    const [pokemon, setPokemon] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const obtenerPokemon = async () => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`);
            const data = await res.json();
            console.log(data)
            setPokemon(data)
        } catch (error) {
            
            navigate(`/not-found`);
        }
    }
    useEffect(() => {
        obtenerPokemon();
    }, []);
    return (
        <MyCardContext.Provider value={{ pokemon }}>
           { children }
        </MyCardContext.Provider>
    )
};

export default CardsProvider;