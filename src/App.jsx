import './App.css';
import Navigation from './Componentes/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import NotFound from './Views/NotFound';
import SelectDePokemones from './Views/SelectDePokemones';
import Card from './Componentes/Card';
import CardsProvider from './assets/Context/MyCardContext';


function App() {

  return (
    <>
    <Navigation/>
      <Routes>

        <Route 
        path='/'
        element={<Home />}>
        </Route>
        
        <Route 
        path='/pokemones'
        element={<SelectDePokemones />}>
        </Route>
    
        <Route 
        path='/pokemones/:id'
        element={<CardsProvider><Card /></CardsProvider>}>
        </Route>

        <Route
         path='/not-found'
         element={<NotFound />}>
        </Route>

        <Route
         path='*'
         element={<NotFound />}>
        </Route>

      </Routes>
    </>
  )
}

export default App
