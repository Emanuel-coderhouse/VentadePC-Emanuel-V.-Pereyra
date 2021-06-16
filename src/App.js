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

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      count: 0,
    };
    //this.handleCounterUp =this.handleCounterUp.bind(this);
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
    return (
    <div className='container'>
    <Header title={'Al Mejor Precio'} subtitle= {'Bienvenido a la mejor pagina del gaming'}/>
        <div className='users.section'>
             <UserCard
              name={'Emanuel Pereyra'} 
              description={"Alumno CoderHouse"} 
              img={"https://i2.wp.com/cinefilosoficial.com/wp-content/uploads/2021/03/meme-shrek.jpg?resize=1024%2C597&ssl=1"} 
              date={"Comenzando a aprender React"}/>;
      </div>
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