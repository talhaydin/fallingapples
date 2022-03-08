import React from 'react';
import apple from '../../../assets/Apple.png';
import './Apples.scss';

export default function Apples() {
  return (
    <React.Fragment>
      <img src={apple} alt="" className="apple1 fallen" />
      <img src={apple} alt="" className="apple2" />
      <img src={apple} alt="" className="apple3" />
      <img src={apple} alt="" className="apple4" />
    </React.Fragment>
  );
}
