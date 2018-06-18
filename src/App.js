import React, { Component } from 'react';
import './App.css';
import Characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import Jumbotron from "./components/Jumbotron";

let topScore = 0;
let guesses = 0;
let message = "Click any to begin!"; 

class App extends Component {

state = {
  Characters,
  score: 0,
  topScore,
  guesses,
  message
};

characterClicked = (id) => {
  const Characters = this.state.Characters;
  const clicked = Characters.filter( (Character) => 
Character.id === id);

if (clicked[0].clicked) {
  guesses = 0;
  message = "You already clicked this. Time travel back and start over.";

  //make each clicked status on each card to false when fail game
  Characters.forEach( (Character) => {
    Character.clicked = false;
  });

this.setState({
  message});
this.setState({guesses});
this.setState({Characters});

} else {
  clicked[0].clicked = true;
  guesses =+ guesses + 1;
  message = "You saved one!";

  if (guesses > topScore) {
    topScore = guesses;
    this.setState({topScore});
    
  }

  Characters.sort((a,b) => {
    return 0.5 - Math.random();
  });

  this.setState({Characters});
  this.setState({guesses});
  this.setState({message});
}



};


render() {
    return (
    <div className="container">
      
      <Wrapper>
        <Jumbotron>
        <Title>Stein's Gate Click Game</Title>
        </Jumbotron>
          <div className="container message">
            <h3>{this.state.message}</h3>
            <h3>Score: {this.state.guesses} Top Score: {this.state.topScore}</h3>
          </div>
          <div className="container">
            <div className="row">
              {this.state.Characters.map( (Character) => (
              <CharacterCard
              characterClicked={this.characterClicked}
              id={Character.id}
              key={Character.id}
              name={Character.name}
              image={Character.image}
              />
              ))}
            </div>
          </div>
      </Wrapper>
         
    </div>
    );
  }
}

export default App;
