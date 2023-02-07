import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { isMobile } from "react-device-detect";

function ProductsCarousel() {
  return (
    <div className='product_section layout_padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='product_taital'>Products</h1>
            <p className='product_text'>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='owl-carousel owl-theme'>
              <Splide
                options={{
                  zIndex: 10,
                  gap: "2rem",
                  perPage: isMobile ? 1 : 2,
                  arrowPadding: "5000px",
                  type: "loop",
                  autoplay: true,
                  pagination: false,
                  interval: 5000,
                }}
              >
                <SplideSlide>
                  <div className='item'>
                    <div className='image_main'>
                      <img src='images/img-2.png' alt='image' />
                    </div>
                    <h6 className='price_text'>
                      Price <br />
                      <span style={{ color: "#f75261" }}>$10</span>
                    </h6>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className='item'>
                    <div className='image_main'>
                      <img src='images/img-2.png' alt='image' />
                    </div>
                    <h6 className='price_text'>
                      Price <br />
                      <span style={{ color: "#f75261" }}>$10</span>
                    </h6>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className='item'>
                    <div className='image_main'>
                      <img src='images/img-2.png' alt='image' />
                    </div>
                    <h6 className='price_text'>
                      Price <br />
                      <span style={{ color: "#f75261" }}>$10</span>
                    </h6>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className='item'>
                    <div className='image_main'>
                      <img src='images/img-2.png' alt='image' />
                    </div>
                    <h6 className='price_text'>
                      Price <br />
                      <span style={{ color: "#f75261" }}>$10</span>
                    </h6>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCarousel;
