import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousels } from '../shared/carousels';
import { Row, Col } from 'reactstrap';

function NextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className="slick-arrow"
            style={{ ...style, display: "block", position: "absolute", top: "305px", right: "3.9%", transform: "rotate(180deg)"}}
            onClick={onClick}
        >
            <img src="assets/images/arrow-left.png" alt="arrow-left"/>
        </div>
    );
}
function PrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
        className="slick-arrow"
        style={{ ...style, display: "block", position: "absolute", top: "305px", left: "3.9%", zIndex: "4"}}
        onClick={onClick}
        >
            <img src="assets/images/arrow-left.png" alt="arrow-left"/>
        </div>
    );
}

function SliderComponent() {
    var settings = {
        dots: false,
        slidesToShow: 1,
        arrows: true,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    arrows: false,
                    autoplay:true,
                    autoplaySpeed:3000,
                    slidesToScroll: 1,
                    fade: true,
                    infinite: true,
                    }
                },
        ]
        
    };
    return (
        <section id="top-carousel">
                <Slider {...settings}>
                    {Carousels.map((carousel) => {
                        return(
                            <div className="carousel-item">
                                <div className="carousel-background">
                                    <Row>
                                        <Col xs={12} md={6}>
                                        <div className="carousel-text">
                                            <p className="carousel-text-heading">{carousel.heading}</p>
                                            <p className="carousel-text-subheading">{carousel.subheading}</p>
                                        </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <div className="mask-images">
                                                <img className="" src={carousel.images} alt="mask-images" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                    <div className="photo-stand" >
                                        <img src={carousel.roboStand} alt="stand.png" />
                                    </div>
                                    <div className="photo-stand-bottom">
                                        <img src={carousel.roboStandBottom} alt="standbottom.png"/>
                                    </div>
                                </div>
                        )
                    })}
                </Slider>
                <div className="photo-stand-bottom">
                    <img src="/assets/images/stand-bottom.png" alt="group.png"/>
                </div>
                <div className="ellipse-photo-stand-bottom"></div>
            </section>
    )
}

export default SliderComponent
