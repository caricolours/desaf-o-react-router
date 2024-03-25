import { useContext } from "react";
import { MyCardContext } from "../assets/Context/MyCardContext";
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const navigate = useNavigate();
  const { pokemon } = useContext(MyCardContext);

  // console.log(Object.keys(pokemon));

  if(Object.keys(pokemon).length > 0){
    const types = pokemon.types.map(p => p.type.name.toUpperCase());
    
    // console.log(types);

    return <main className="container mx-auto m-5" >
      <div className="card d-flex flex-row shadow-sm border-black">
        <img src={ pokemon.sprites.other.dream_world.front_default } width="50%" className="p-4" />
        <ul className="bg-light border border-gray rounded w-100 list-unstyled p-4 my-2 me-2">
          <h1 className="text-capitalize">{ pokemon.forms[0].name }</h1>
          <li>Hp:  <b>{ pokemon.stats[0].base_stat }</b> </li>
          <li>Atack: <b>{ pokemon.stats[1].base_stat }</b> </li>
          <li>Speed: <b>{ pokemon.stats[5].base_stat }</b> </li>
          <li>Special Atack: <b>{ pokemon.stats[3].base_stat }</b> </li>
          <li>Special Defence: <b>{ pokemon.stats[4].base_stat }</b> </li>
          <li>Tipo: <b>{ types.join(" - ") }</b> </li>
        </ul>
        
    </div>
    <button className='btn btn-warning my-3' onClick={() => navigate('/pokemones')}>
            Buscar otro Pokemon
          </button>
    </main>
  }
  
}

export default Card;
