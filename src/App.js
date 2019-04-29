import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score:0,
    topScore:0
  };
  IncorrectGuess = friends => {
    this.setState({
      score: 0
    });
  };
  correctGuess = friends => {
    const {topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = Math.max(newScore, topScore);
    this.setState({
      score:newScore,
      topScore:newTopScore
    });
  };
  handleClick= (friends)=>{
    console.log("handleclick");
    this.setState({
      friends: this.ShuffleFriend(friends),
      score:newScore,
      topScore:newTopScore
    });
    
  }
  ShuffleFriend=(friends) =>{
    console.log("shuffling")
    let i = friends.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
      i--;
    }
    return friends;
}
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Nav 
      score={this.state.score} topScore={this.state.topScore} />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
          handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
