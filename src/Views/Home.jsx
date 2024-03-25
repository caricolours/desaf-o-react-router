
import { Container } from 'react-bootstrap';
import pikachu from '../assets/img/fotohome.png';
const Home = () => {
  return (
    <Container className='tex-center d-flex flex-column align-items-center mt-5'> 
        <h1 className='mb-3 mt-5'>Bienvenido <span className='fw-bold'>Maestro Pokemón</span></h1>
        <img
            src= {pikachu}
            alt='pastel'
            className= 'img-fluid' width="250"
            /> 

        <h5 className='mt-5'>Imágen1: Vista Home</h5>
        <h5>Fuente: Desafío Latam</h5>
    </Container>
  )
}

export default Home
