import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Inicio from './paginas/Inicio';
import Registro from './paginas/Registro';
import Nosotros from './paginas/Nosotros';
import Header from './componentes/header'


function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer/>
<Routes>
 
    <Route exact path='/' Component={Inicio}/>
    <Route  path='/add' Component={Registro}/>
    <Route path='update/:id' Component={Registro}/>
    <Route  path='/about' Component={Nosotros}/>
 
</Routes>

    </div>
    </BrowserRouter>
  );
}


export default App; 






