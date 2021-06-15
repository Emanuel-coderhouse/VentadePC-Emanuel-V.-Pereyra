import React, { Component, Fragment} from 'react';
import './App.css';
//Componentes
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Section from './components/Section/Section';
import Navbar from './components/Navbar/Navbar';


class App extends Component{
  render () {
    return(
      <div id='App'>
        <Header/>
      <h1>ReactMenu</h1>
        <Button title={"Send Data"} />
        <Button title={"Send Servicio"} />
        <Button title={"Send Contacto"} />
        <Section subtitle= {'Al mejor Precio'}/>
      <ul className='Menu'>
        <li>Productos</li>
        <li>Servicios</li>
        <li>Acerca De</li>
        <li>Contacto</li>
      </ul>
      </div>
    );
  }
}

export default App;