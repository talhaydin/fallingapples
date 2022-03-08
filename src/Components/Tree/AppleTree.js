import React from 'react';
import tree from '../../assets/Tree.svg';
import Apples from '../Apples/Apples';
import Basket from '../Basket/Basket';
import './AppleTree.scss';

export default function Tree({ isShaked }) {
  return (
    <div className="imagewrapper">
      <img src={tree} alt="" className={isShaked ? ' tree shaked' : 'tree'} />{' '}
      {/* based on whether the tree is shaked or not, decide the classname of image  */}
      <Apples isShaked={isShaked}></Apples>
      <Basket></Basket>
    </div>
  );
}
