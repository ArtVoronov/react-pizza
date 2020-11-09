import { Component, Fragment } from "react";
import path from "path";
import "./index.css";
import PizzaItem from "./pizza-item";

const data = require("./content.json");

export default class PizzaContainer extends Component {
  render() {
    return (
      <ul>
        {data.map((item, index) => (
          <Fragment key={item + String(index)}>
            <PizzaItem item={item} />
          </Fragment>
        ))}
      </ul>
    );
  }
}
