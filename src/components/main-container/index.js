import { Component } from "react";
import PizzaContainer from "./pizza-container";

export default class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <PizzaContainer />
      </div>
    );
  }
}
