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
  // CorrectGuess = newData => {
  //   this.setState({
  //     data: this.ShuffleFriend(newData),
  //   });
  // };
  ShuffleFriend=friends =>{
    console.log("shuffling")
    for (let i = friends.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
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
            ShuffleFriend={this.ShuffleFriend}
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
