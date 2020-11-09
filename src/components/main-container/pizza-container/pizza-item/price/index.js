import { Component } from "react";

import "./index.css";

export default class PizzaItemPrice extends Component {
  render() {
    const { price, size } = this.props;
    return <span className={`item-price ${size}`}>{price}</span>;
  }
}
