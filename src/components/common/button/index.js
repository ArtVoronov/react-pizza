import { Component } from "react";
import "./index.css";

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { text: this.props.buttonText };
  }

  changeText = () => {
    this.setState({
      text: this.state.text === "Order" ? this.props.buttonText : "Order",
    });
  };

  render() {
    const { classN } = this.props;
    const { text } = this.state;
    return (
      <button
        type="button"
        className={classN}
        onMouseEnter={this.changeText}
        onMouseLeave={this.changeText}
      >
        {text}
      </button>
    );
  }
}
