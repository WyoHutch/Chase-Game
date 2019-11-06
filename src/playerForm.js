import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      gameid: 0
    };
  }
  myChangeHandler = event => {
    axios
      .post("http://localhost:5000/player", {
        name: this.state.username,
        score: 0
      })
      .then(response => {
        this.setState({ gameid: Number(response.data) });
      });
  };
  render() {
    return (
      <form>
        <p>Enter Player Name:</p>
        <input type="text" name="username" />
        <button onClick={this.myChangeHandler}>Submit</button>
        {this.state.errormessage}
      </form>
    );
  }
}

export default PlayerForm;
