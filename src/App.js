import React, { Component } from 'react';
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  
  state = {
    characters
  };
  
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        {this.state.characters.map(characters => (
          <CharCard 
          id={characters.id}
          key={characters.key}
          image={characters.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
