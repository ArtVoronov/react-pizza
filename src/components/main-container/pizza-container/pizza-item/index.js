import { Component } from "react";
import Button from "../../../common/button";

import "./index.css";

export default class PizzaItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <li className="pizza-item">
        <img
          src={`${process.env.PUBLIC_URL + item.image}`}
          alt={`${item.name}`}
        />
        <Button classN="pizza-order" buttonText={item.name} />
      </li>
    );
  }
}
