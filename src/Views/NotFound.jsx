import React from 'react'
import error from '../assets/img/error5.jpg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12 text-center'>
          <img
            src={error}
            alt='404'
            className='img-fluid'
          />
          <p className='mt-4'>No hay nada aquí, por favor intenta una nueva busqueda</p>
          <button className='btn btn-primary' onClick={() => navigate('/pokemones')}>
            Volver
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
