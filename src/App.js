import React, { Component, Fragment} from 'react';
import './App.css';


class App extends Component{
  render () {
    return(
      <div id='App'>
      <h1>JavaSMenu</h1>
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