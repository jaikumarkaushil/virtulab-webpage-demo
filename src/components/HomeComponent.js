import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UseCases from './UseCasesComponent';
import ProductFeatures from './ProductFeaturesComponent';
import FAQs from './FAQComponent';
import Contact from './ContactComponent';

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

const Home = () => {

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
                breakpoint: 678,
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
        <div className="homepage">
            <section id="top-carousel">
                <Slider {...settings}>
                    <div className="carousel-item">
                        <div className="carousel-background d-flex flex-row m-0">
                            <div className="carousel-text">
                                <span className="carousel-text-heading">World’s number <br/> 1 telepresence Robot</span>
                                <br/>
                                <span className="carousel-text-subheading">Made in the USA. Available in India</span>
                            </div>
                            <div className="mask-images">
                                <img src="/assets/images/shutterstock_371017109_1.png" alt="mask-images_1.png" />
                            </div>
                        </div>

                        <div className="photo-stand">
                            <img src="/assets/images/Robo-1_1.png" alt="stand.png" />
                        </div>
                        <div className="photo-stand-bottom">
                            <img src="/assets/images/stand-bottom.png" alt="group.png"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-background d-flex flex-row m-0">
                            <div className="carousel-text">
                                <span className="carousel-text-heading">Travel To Office <br/> or a Meeting in 5 Seconds</span>
                                <br/>
                                <span className="carousel-text-subheading">Use Robotics to be everywhere, anytime!</span>
                            </div>
                            <div className="mask-images">
                                <img src="/assets/images/shutterstock_371017109_2.png" alt="mask-images_2.png" />
                            </div>
                        </div>

                        <div className="photo-stand">
                            <img src="/assets/images/Robo-1_2.png" alt="stand.png" />
                        </div>
                        <div className="photo-stand-bottom">
                            <img src="/assets/images/stand-bottom.png" alt="group.png"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-background d-flex flex-row m-0">
                            <div className="carousel-text">
                                <span className="carousel-text-heading">Walk around your Factory floor</span>
                                <br/>
                                <span className="carousel-text-subheading">While in your car</span>
                            </div>
                            <div className="mask-images">
                                <img src="/assets/images/shutterstock_371017109_3.png" alt="mask-images_3.png" />
                            </div>
                        </div>

                        <div className="photo-stand">
                            <img src="/assets/images/Robo-1_3.png" alt="stand.png" />
                        </div>
                        <div className="photo-stand-bottom">
                            <img src="/assets/images/stand-bottom.png" alt="group.png"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-background d-flex flex-row m-0">
                            <div className="carousel-text">
                                <span className="carousel-text-heading">Show a customer around your premises</span>
                                <br/>
                                <span className="carousel-text-subheading">In a single click</span>
                            </div>
                            <div className="mask-images">
                                <img src="/assets/images/shutterstock_371017109_4a.png" alt="mask-images_4.png" />
                            </div>
                        </div>
                        <div className="photo-stand">
                            <img src="/assets/images/Robo-1_4.png" alt="stand.png" />
                        </div>
                        <div className="photo-stand-bottom">
                            <img src="/assets/images/stand-bottom.png" alt="group.png"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-background d-flex flex-row m-0">
                            <div className="carousel-text">
                                <span className="carousel-text-heading">Be at Events across the <br/> World</span>
                                <br/>
                                <span className="carousel-text-subheading">From your office desk</span>
                            </div>
                            <div className="mask-images">
                                <img src="/assets/images/Slider-Events.jpg" alt="mask-images_5.png" />
                            </div>
                        </div>
                        <div className="photo-stand">
                            <img src="/assets/images/Robo-1_1.png" alt="stand.png" />
                        </div>
                        <div className="photo-stand-bottom">
                            <img src="/assets/images/stand-bottom.png" alt="group.png"/>
                        </div>
                    </div>
                </Slider>
                <div height="" className="photo-stand-bottom">
                    <img src="/assets/images/stand-bottom.png" alt="group.png"/>
                </div>
                <div className="ellipse-photo-stand-bottom"></div>
            </section>
            <UseCases/>
            <ProductFeatures/>
            <FAQs/>
            <Contact/>
        </div>
    )
}

export default Home;
