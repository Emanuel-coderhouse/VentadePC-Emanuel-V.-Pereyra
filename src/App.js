import React, {Component} from 'react';
import './App.css';
//Componentes
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';
import { Button } from 'semantic-ui-react'
/*
import Button from './components/Button/Button';
import Section from './components/Section/Section';
import Navbar from './components/Navbar/Navbar';
*/
//DATA
import {itemsData} from "./components/Item/ItemList";


class App extends Component{
  constructor(){
    console.log("Contructor");
    super();
    
    this.state = {
      items: []
    };
    //this.handleCounterUp =this.handleCounterUp.bind(this);
  }

  componentDidMount() {
    setTimeout(() =>{
      //console.log("ComponentDidMount");
      this.setState({items: itemsData});
    }, 2000);
  }

  handleCounterUp = () => {
    // console.log('Hiciste Click!');
    this.setState({ counter: this.state.counter + 1 });
  };

  handleCounterDown = () => {
    // console.log('Hiciste Click!');
    this.setState({ counter: this.state.counter - 1 });
  };

  render () {
    console.log(this.state.items);
    return (
    <div className='container'>

     <Header title={'Al Mejor Precio'} subtitle= {'Bienvenido a la mejor pagina del gaming'}/>
        <div className='users.section'>
             <UserCard
              name={'Emanuel Pereyra'} 
              description={"Alumno CoderHouse"} 
              img={"https://i.pinimg.com/564x/3b/3d/3a/3b3d3a9cddbba62819b18732093b5179.jpg"} 
              date={"Comenzando a aprender React"}/>;
      </div>
           {this.state.items.map((productos) =>{ 
             return (
               <ul key={productos.id}>
                 <li>{productos.name}</li>
               </ul>
             )

           }) }

      <div className='counter-section'>{this.state.count}
      <h3 style={{fontSize: 34}}>Contador</h3>
      <p>{this.state.count}</p>
      </div>
      <div className='btn-section'>
          <Button onCLick={this.handleCounterUp}primary>+</Button>
          <Button onCLick={this.handleCounterDown}positive>-</Button>
      </div>


    </div> 
    
    

    );
  }
}

export default App;