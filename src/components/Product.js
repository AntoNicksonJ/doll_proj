import React from 'react';
import '../styles/style.css';
import Ele1 from '../assets/Ele1.png';

const Product = () => {
  return (
    <div className="container-img">
      <div>
        <img className="ele-1" src={Ele1} alt="" />
      </div>
      <div className="container2"></div>
    </div>
  );
}

export default Product;
