import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (e) => {
    setIndex();
  };

  const surpriseMe = () => {
    let random = Math.trunc(Math.random() * 4);
    console.log(random);

    setIndex(random);
  };

  return (
    <div className="main-con">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="con text-center"
      >
        <Carousel.Item className="item">
          <img
            className="d-block pic
            "
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
            alt="First slide"
          />
          <h2>Anna Jonson</h2>
          <h5>WEB DESINER</h5>
          <p>
            Helvetica artisan kinfolk thundercats lumbersexual blue bottle.
            Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee
            enamel pin fashion axe.photo booth jean shorts artisan narwhal.
          </p>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block pic  "
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
            alt="First slide"
          />
          <h2>Peter Jones</h2>
          <h5>INTERN</h5>
          <p>
            Sriracha literally flexitarian irony, vape marfa unicorn. Glossier
            tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb
            marfa hell of pabst raclette post-ironic jianbing swag.
          </p>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block pic "
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
            alt="First slide"
          />
          <h2>Bill Anderson</h2>
          <h5>THE BOSS</h5>
          <p>
            Edison bulb put a bird on it humblebrag, marfa pok pok heirloom
            fashion axe cray stumptown venmo actually seitan. VHS farm-to-table
            schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby
            chic.
          </p>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block pic "
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
            alt="First slide"
          />
          <h2>Susan Smith</h2>
          <h5>WEB DEVELOPER</h5>
          <p>
            I'm baby meggings twee health goth +1. Bicycle rights tumeric
            chartreuse before they sold out chambray pop-up. Shaman humblebrag
            pickled coloring book salvia hoodie, cold-pressed four dollar toast
            everyday carry
          </p>
        </Carousel.Item>
      </Carousel>
      <div className="outsider">
        <button type="button" className="btn text-light" onClick={surpriseMe}>
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default ControlledCarousel;
