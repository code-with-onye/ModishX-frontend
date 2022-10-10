import { IconButton } from "@mui/material";
import { useState } from "react";

function SlideGallery({ data }) {
  const [pin, setPin] = useState(6); //this product pin starts with zero

  const nextSlide = () => {
    if (pin >= data.length - 1) {
      setPin(0);
    } else {
      setPin(pin + 1);
    }
  };

  const prevSlide = () => {
    if (pin <= 0) {
      setPin(data.length - 1);
    } else {
      setPin(pin - 1);
    }
  };

  return (
    <div className="slide__gallery">
      <div className="slide__gallery__sectionOne">
        <div className="slide__gallery__sectionOne__authLeft">
          <IconButton onClick={prevSlide}>
            <i className="ri-arrow-left-line"></i>
          </IconButton>
        </div>

        <div className="slide__gallery__sectionOne__contentWrapper">
          <div className="slide__gallery__sectionOne__imgContainer">
            <div className="slide__gallery__sectionOne__imgContainer__drop"></div>
            <img src={data[pin]?.imgUrl} alt="" />
          </div>
          <div className="slide__gallery__sectionOne__text__container">
            <h3>{data[pin]?.name}</h3>
            <p>{data[pin]?.short_description}</p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="slide__gallery__sectionOne__authRight">
          <IconButton onClick={nextSlide}>
            <i className="ri-arrow-right-line"></i>
          </IconButton>
        </div>
      </div>

      <div className="slide__gallery__sectionTwo">
        {data.map((product, index) => {
          return (
            <div
              style={{
                backgroundImage: `url(${product?.imgUrl})`,
              }}
              key={index}
              className={`slide__gallery__navigation ${
                index == pin ? "active__swipe__navigation" : ""
              }`}
              onClick={() => {
                setPin(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default SlideGallery;
