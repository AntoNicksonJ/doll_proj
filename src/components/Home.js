import React from 'react';
import '../styles/style.css';

const Home = () => {
  return (
    <>
    <section className="bg">
      <section className="bg2"></section>
    </section>
    <div className="container">
      <div className="left">
        <div className="con1">
          <div className="pro note"></div>
          <div className="pro"></div>
          <div className="pro pro2"></div>
          <div className="pro"></div>
          <div className="pro pro3"></div>
          <div className="pro pro2"></div>
        </div>
        <div className="con2">
          <div className="hed">
            <p>New Arrivals</p>
          </div>
          <div className="bx">
            <div className="pro pro3"></div>
            <div className="pro pro2"></div>
            <div className="pro"></div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="ad1"></div>
        <div className="ad2">
          <div className="cos">
            <div className="box">
              <h1>Create Your Own Doll</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, nulla ullam omnis, iste dolores in itaque ex quas expedita non culpa enim temporibus numquam quidem voluptas, saepe molestias molestiae vel.</p>
              <button>Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
