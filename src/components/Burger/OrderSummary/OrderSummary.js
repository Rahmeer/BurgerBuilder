import React from 'react';
// import classes from './Modal.module.css';
import Aux from '../../../hoc/auxi';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious Burger With the follow ingredient:</p>
      <ul>{ingredientSummary}</ul>
      <p>continue to checkout?</p>
    </Aux>
  );
};

export default OrderSummary;
