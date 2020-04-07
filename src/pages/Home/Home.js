import React, { Component } from "react";
import Foto1 from "./img/260141.jpg";
import Foto2 from "./img/508276.png";
import Foto3 from "./img/606500.jpg";
import Frame from "./Frame";

class Home extends Component {
  render() {
    return (
      <div className="row">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ height: "700px" }}>
          <div className="carousel-item active">
            <img className="d-block w-100" src={Foto1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Foto2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Foto3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="row">
        <Frame />
        </div>
      </div>
      
    );
  }
}

export default Home;
