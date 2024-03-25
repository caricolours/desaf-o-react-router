import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';


const Navigation = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    const navigate = useNavigate();
    return (
        <>
            <nav className="bg-warning d-flex justify-content-between p-3">
                <div>
                    <img onClick={() => navigate('/')} src={logo} width="30" alt='404' />
                </div>

                <div className='ps-5'>
                    <NavLink className={ `${setActiveClass} link-menu mx-2` } to="/"> Home </NavLink>
                    <NavLink className={ `${ setActiveClass } link-menu mx-2` } to="/pokemones"> Pokemones </NavLink>
                </div>
            </nav>

        </>
    )
}

export default Navigation