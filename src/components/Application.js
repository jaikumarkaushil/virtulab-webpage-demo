import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Applications} from '../shared/applications';


function NextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className="slick-arrow"
            style={{ ...style, display: "block", position: "absolute", top: "40.5%", right: "14%", transform: "rotate(180deg)"}}
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
        style={{ ...style, display: "block", position: "absolute", top: "40.5%", left: "14%", zIndex: "4"}}
        onClick={onClick}
        >
            <img src="assets/images/arrow-left.png" alt="arrow-left"/>
        </div>
    );
}

class Application extends Component {
    state = {
        currentSlide: 0
    }

    render() {
        var settings = {
            dots: true,
            dotsClass: "applications-tab",
            speed: 300,
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            fade: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: (prev, next) => {
                this.setState({ currentSlide: next });
            },
            appendDots: dots => {
                return (
                    <div>
                        <ul style={{display: "flex", justifyContent: "space-between"}}>
                            {dots.map((item, index) => {
                                return (
                                    <li style={{listStyle: "none"}} key={index}>{item.props.children}</li>
                                );
                            })}
                        </ul>
                    </div>
                )
            },
            customPaging: function(i) {
                return (
                        <button className={i === this.currentSlide ? "tab-link-active" : "tab-link"}>{Applications[i].application}</button>
                );
            }            
        };
        
        return (
            <section id="applications" className="d-none d-md-block">
                <div className="applications-ellipse"></div>
                <p className="heading">One Robot. Countless Application</p>
                <hr className="hr-line"/>
                <Slider {...settings}>
                    {Applications.map((application) => {
                        return(
                            <div key={application.id} className="d-flex justify-content-center align-items-center">
                                <img width="884px" height="484px" src={application.video} alt={application.application} />
                            </div>
                        )
                    })}
                </Slider>
            </section>
        )
    }
}

export default Application;
