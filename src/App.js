import React, { Component } from 'react';
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
import './App.css';


//shuffle function
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

class App extends Component {

  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    clicked: []
  };

  handleClick = (id) => {
    //if the clicked image has an id of the indexed image
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ clicked: this.state.clicked.push(id) });
      this.addPoint();
      this.shuffleChars();
    } else {
      this.resetGame();
    }
  };

  addPoint = () => {
    let newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      feedback: "Algebraic! You guessed right!"
    });
    //if the incremented current score is higher than the top score, it becomes the new top score
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
      //if the user clicks on each unique character card they win
    } else if (newScore === 12) {
      this.setState({ feedback: "MATHEMATICAL! You win!" });
      //otherwise, shuffle the cards 
    } else {
      this.shuffleChars();
    }
  };

  //function to shuffle cards
  shuffleChars = () => {
    let shuffledCards = shuffle(characters);
    this.setState({ characters: shuffledCards });
  };

  resetGame = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      feedback: "What the lump? You clicked that already!",
      clicked: []
    });
    this.shuffleChars();
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharCard
              key={character.id}
              id={character.id}
              handleClick={this.handleClick}
              image={character.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
