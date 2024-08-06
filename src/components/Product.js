import React from 'react';
import '../styles/style.css';
import Ele1 from '../assets/Ele1.png';
import Categories from "../components/categories/Categories"

const Product = () => {
  return (
    <div className="container-img">
      <div>
        <img className="ele-1" src={Ele1} alt="" />
      </div>
      <div className="container2">
        <Categories />
      </div>
    </div>
  );
}

export default Product;
