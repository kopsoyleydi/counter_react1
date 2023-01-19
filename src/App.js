/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { Component } from "react";
import './App.css';
// eslint-disable-next-line no-unused-vars

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curValue: 10
    };
  }

  handleClickPlus = () =>{
    this.setState({curValue: ++this.state.curValue })
  }
  handleClickMinus = () =>{
    this.setState({curValue: --this.state.curValue })
  }
  handleClickRes = () => {
    this.setState({curValue: 0})
  }
  handleClickRandom = () =>{
    this.setState({curValue : randomNumber(-50,50)})
  }
//function getRandomArbitrary(min, max) {
  //return Math.random() * (max - min) + min;
//} 
  render(props){
    return(
      <div className="app">
          <div class="counter">{this.state.curValue}</div>
          <div class="controls">
          <button onClick =  {this.handleClickPlus}>INC</button>
          <button onClick={this.handleClickMinus}>DEC</button>
          <button onClick={this.handleClickRandom}>RND</button>
          <button onClick={this.handleClickRes}>RESET</button>
          </div>
        </div>
    )
    }
}

export default App;

