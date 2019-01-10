import React, { Component } from 'react';
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
import './App.css';


//shuffle function
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    clicked: [],
    feedback: "Click on an image to begin!"
  };

  handleClick = (id) => {
    console.log(`Clicked picture id: ${id}`);
    //if the id of the clicked image does not already exist in the array
    //increase points and add id of image to array
    if (!this.state.clicked.includes(id)) {
      this.addPoint();
      this.state.clicked.push(id);
      this.setState({
        feedback: "Algebraic! You guessed right!"
      })
      // this.shuffleChars();
    } else {
      this.resetGame();
      this.setState({
        feedback: "What the lump? You clicked on this already!"
      })
    }
  };

  addPoint = () => {
    let score = this.state.currentScore + 1;
    console.log(`The score is currently ${score}`);
    //if the user clicks on each unique character card they win
    if (score > this.state.highScore) {
      this.setState({
        highScore: score,
        currentScore: score
      });
    } else if (score === 12) {
      this.setState({
        feedback: "MATHEMATICAL! You win!",
        highScore: score,
        currentScore: 0,
        clicked: []
      });
      //if the incremented current score is higher than the top score, it becomes the new top score
      //otherwise update current score
    } else {
      this.setState({
        currentScore: score,
      });
    }
    this.shuffleChars();
  };

  resetGame = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      feedback: "",
      clicked: []
    });
    // this.shuffleChars();
  };

  //function to shuffle cards
  shuffleChars = () => {
    let shuffledCards = shuffle(characters);
    this.setState({ characters: shuffledCards });
  };

  render() {
    return (
      // <div>
      <Wrapper>
        <Jumbotron />
        {/* <Navbar /> */}
        {this.state.characters.map(character => (
          <CharCard
            id={character.id}
            key={character.id}
            handleClick={this.handleClick}
            image={character.image}
          />
        ))}
      </Wrapper>
      // </div>
    );
  }
}

export default App;
