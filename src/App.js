import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

function shuffleFriends(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentscore:0,
    topScore:0,
    messege:"Click any image to start",
    clicked:[13]
  };
 
  handleClick = id => {
    // if the Id is not available in the clicked array increase score
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
    console.log(this.state.clicked)
  };
  handleIncrement = () => {
    const newScore = this.state.clicked.length;
    console.log(newScore)
    this.setState({
      currentScore: newScore,
      messege: "Yes! "
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ messege: "You Guessed all 12 ! You win!" });
    }
    this.handleShuffle();
  };
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      messege: "Sorry",
      clicked: []
    });
    this.handleShuffle();
  };
  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    
    return (
      <div>
      <Nav 
      messege={this.state.messege}
      currentScore={this.state.currentScore} topScore={this.state.topScore} />
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

