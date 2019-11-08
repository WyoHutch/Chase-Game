import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      hi_score: 0
    };

    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.postPlayer = this.postPlayer.bind(this);
  }
  myChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  postPlayer = event => {
    event.preventDefault();
    axios
      .post("https://knife-chase-game.herokuapp.com/player", {
        // .post("http://localhost:5000/player", {
        name: this.state.username
      })
      .then(response => {
        console.log("Player response:r", response);
        this.setState({ hi_score: Number(response.data) });
      });
  };

  render() {
    return (
      <form onSubmit={this.postPlayer}>
        <h3 style={{ color: "cyan" }}>High Score : {this.state.hi_score}</h3>
        <p style={{ textAlign: "left" }}>Enter Player Name: </p>
        <input
          type="text"
          value={this.state.username}
          onChange={this.myChangeHandler}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PlayerForm;
