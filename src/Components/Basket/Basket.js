import React from 'react';
import basket from '../../assets/Basket.svg';
import './Basket.scss';

export default function Basket() {
  return (
    <React.Fragment>
      <img src={basket} alt="" className="basket" />
    </React.Fragment>
  );
}
