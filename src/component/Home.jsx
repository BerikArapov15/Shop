import React from "react";
import { Carousel } from "react-bootstrap";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      {/* <div className="card bg-dark text-white border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div> */}
      <Carousel card bg-dark text-white border-0>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
      width='150px'
      height='500px'
    />
    <Carousel.Caption>
      <h3>Men's clothing</h3>
      <p>Shop men's clothing at La collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?b=1&k=20&m=916092484&s=170667a&w=0&h=ZhslL_Qlwarbz-GF6dQ-DWswjhle_vzKQsNwpppVmic="
      alt="First slide"
      width='150px'
      height='500px'
    />
    <Carousel.Caption>
      <h3>Women's clothing</h3>
      <p>Shop women's clothing at La collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1554047310-ab6170fc7b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxsZXJ5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "
      alt="Second slide"
      width='150px'
      height='500px'
    />

    <Carousel.Caption>
      <h3>Jewellery</h3>
      <p>Shop The Season's Hottest Trends. Free shipping all over the Kyrgyzstan.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU="
      alt="Third slide"
      width='150px'
      height='500px'
    />

    <Carousel.Caption>
      <h3>Electronic</h3>
      <p>Electronic-Shop - We love Electronics.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <Products/>
      <Products/>
    </div>
  );
};

export default Home;
