import React from "react";
import TextField from "@material-ui/core/TextField";

export default class Form extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    const newText = e.target.value;
    this.setState({
      text: newText
    });
  };

  handleKeyDown = e => {
    if (e.key == "Enter") {
      this.props.submit(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <TextField
        label="Todo..."
        margin="normal"
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        fullWidth
        value={this.state.text}
      />
    );
  }
}
