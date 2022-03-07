import React from 'react';
import tree from '../../assets/Tree.png';
import './Tree.scss';

export default function Tree({ isShaked }) {
  return (
    <img src={tree} alt="" className={isShaked ? ' tree shaked' : 'tree'} />
  );
}
