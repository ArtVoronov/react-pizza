import { Component } from "react";
import Button from "../../../common/button";

import "./index.css";
import PizzaItemPrice from "./price";

export default class PizzaItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item } = this.props;
    let prices = {};

    //looks really bad

    if (isFinite(item.priceS)) prices.small = item.priceS;
    if (isFinite(item.priceM)) prices.medium = item.priceM;
    if (isFinite(item.priceL)) prices.large = item.priceL;

    return (
      <li className="pizza-item">
        <img src={`${item.image}`} alt={`${item.name}`} />
        <div className="price-container">
          {Object.keys(prices).map((priceIndex, index) => (
            <PizzaItemPrice
              key={priceIndex + String(index)}
              size={priceIndex}
              price={`${prices[priceIndex]} руб.`}
            />
          ))}
        </div>
        <Button classN="pizza-order" buttonText={item.name} />
      </li>
    );
  }
}
