import "../helpers/css/projectalt.css";
import "../helpers/css/projectalt2.css";
import "../helpers/css/font.css";
import React from "react";
import Arm from "../helpers/images/arm.png";
import Tyre from "../helpers/images/tyre.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Pagination,
  Controller,
  Autoplay,
  Navigation,
  Mousewheel,
} from "swiper";
function Project1() {
  return (
    <div className="project1_card">
      <div className="left">
        <figure>
          <img
            src={"https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1"}
            alt="shoe"
          />
        </figure>
        <i className="fa fa-long-arrow-left"></i>
        <i className="fa fa-long-arrow-right"></i>
      </div>
      <div className="right">
        <div className="product-info">
          <div className="product-name">
            <h2>Jun-July 2021</h2>
          </div>
          <div className="details">
            <h3>Winter Collection</h3>
            <h2>Avani</h2>
            <h4>
              <span className="fa fa-dollar"></span>150
            </h4>
            <h4 className="dis">
              <span className="fa fa-dollar"></span>200
            </h4>
          </div>
          <ul>
            <li>SIZE</li>
            <li className="bg">7</li>
            <li className="bg">8</li>
            <li className="bg">9</li>
            <li className="bg">10</li>
            <li className="bg">11</li>
          </ul>
          <ul>
            <li>COLOR</li>
            <li className="yellow"></li>
            <li className="black"></li>
            <li className="blue"></li>
          </ul>
          <span className="foot">
            <i className="fa fa-shopping-bag"></i>Buy Now
          </span>
          <span className="foot">
            <i className="fa fa-shopping-cart"></i>Add TO Cart
          </span>
        </div>
      </div>
    </div>
  );
}

function Project2() {
  return (
    <div className="ptrial">
      <div className="pinfo">
        <div className="imgdiv">
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
        </div>
        <div className="project-h1">
          <p className="date">June-December 2021</p>
        </div>
        <div className="project-h2">
          <div className="details">
            <h1>Stellus</h1>
            <h3>Indian Rover Design Challenge 2020</h3>
          </div>
        </div>
        <div className="div4">
          <p>A para about the project.</p>
        </div>
      </div>
      <div className="techspecs">
        <div class="div1">
          <div>
            <figure><img src={Arm}/></figure>
          </div>
          <div>
            <ul>
              <li>5 DoF</li>
              <li>5+ kg Load Capacity</li>
            </ul>
          </div>
        </div>
        <div class="div2">
          <div>
                <img src={Tyre}/>
          </div>
          <div>Honeycomb Tires with Independent Steering</div>
        </div>
        <div class="div3"> </div>
        <div class="div4"> </div>
        <div class="div5"> </div>
      </div>
    </div>
  );
}
export default function ProjectAlt() {
  return (
    <div className="projectalt">
      <Project2 />
    </div>
  );
}
