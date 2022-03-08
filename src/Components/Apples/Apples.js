import React from 'react';
import apple from '../../assets/Apple.png';
import './Apples.scss';

export default function Apples({ isShaked }) {
  return (
    <React.Fragment>
      <img
        src={apple}
        alt=""
        className={isShaked ? ' apple1 fallen' : 'apple1'}
      />
      <img
        src={apple}
        alt=""
        className={isShaked ? ' apple2 fallen' : 'apple2'}
      />
      <img
        src={apple}
        alt=""
        className={isShaked ? ' apple3 fallen' : 'apple3'}
      />
      <img
        src={apple}
        alt=""
        className={isShaked ? ' apple4 fallen' : 'apple4'}
      />
    </React.Fragment>
  );
}
