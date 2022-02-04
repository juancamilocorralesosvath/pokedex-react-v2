import AllPokemon from "./containers/AllPokemon";
import Pokemon from "./components/Pokemon";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/main.scss'
const  App = () => {
  /* React Router docs: 
              Switch searches through its 'children' <Route> to find 
              one that matches the current URL.
              When it does so, it ignores all others.
              It is better to put longer routes before shorter ones.
        */
  return (
    <div className="App">
      <Router>
      <h1 className="primary-heading" >LAUDETUR IESUS CHRISTUS</h1>
      {/* no mames:
          acualizaron a react router v6 y cambiaron el switch por Routes,
          component por element y hay que importar los componentes tambien de manera especial
          caramba...
          Gracias Dios mio!
      */}
      <Routes>
        <Route path='/pokemon/:id' element={<Pokemon/>} />
        <Route path='/' element={<AllPokemon/>} />
      </Routes>
      </Router>
      </div>
  );
};

export default App;
