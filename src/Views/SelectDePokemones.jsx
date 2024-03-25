import { useContext } from "react";
import { MyPokeContext } from "../assets/Context/MyPokeContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const SelectDepokemones = () => {
    const { pokemones, selectPokemon, useSelectPokemon } = useContext(MyPokeContext);
    const navigate = useNavigate();

    const goToPokemon = () => {
        if (selectPokemon) {
            navigate(`/pokemones/${selectPokemon}`);
        } else {
            Swal.fire('No has selecionado ningún pokemon');
        }
    };

    return (
        <div className="pokemones container my-4">
            <h1>Selecciona un Pokemon</h1>
            <section className="mt-4">
                <select className="form-select mb-3" value={selectPokemon} onChange={({ target }) => useSelectPokemon(target.value)}>
                    <option value="" disabled>Selecciona un Pokemon</option>
                    {pokemones.map(({ url, name }) => (
                        <option key={name} value={url.split('/')[6]}>{name}</option>
                    ))}
                </select>
                <button className=" btn btn-warning" onClick={goToPokemon}>Ver detalles</button>
            </section>
        </div>
    )
}
export default SelectDepokemones;

