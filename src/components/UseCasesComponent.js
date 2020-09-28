
import React, { useState, useEffect } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { UseCaseCards } from '../shared/usecasecards';

import AOS from 'aos'; 



function UseCases() {
    const [slide, setCurrentSlide] = useState({currentSlide: 0});
    // const [hover, setHover] = useState({hoverCard: false});
    AOS.init();

    useEffect(() => {
        AOS.refresh(); 
    })
    // function toggleHover(e) {
    //     let event = e.target.dataset.event;
    //     setHover({
    //         hoverCard: hover.hoverCard === event ? false : (event)
    //     })
    // }
    // function leaveHover(e) {
    //     let event = e.target.dataset.event;
    //     setHover({
    //         hoverCard: hover.hoverCard === event ? null : event
    //     })
    // }
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll:1,
        dots:true,
        arrows: false,
        dotsClass: "usecases-dots",
        beforeChange: (prev, next) => {
            setCurrentSlide({ currentSlide: next });
        },
        appendDots: dots => {
            return (
                <div>
                    <ul style={{display: "flex", justifyContent: "space-between", padding: "0"}}>
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
                    <button className={i === slide.currentSlide ? "customized-dots-class-active" : "customized-dots-class"}></button>
            );
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots:true,
                    arrows: false,
                    autoplay:true,
                    autoplaySpeed:5000,
                }
            }

        ]
        
    };
    return (
        <section id="use-cases">
            <p className="heading">Telepresence Robot</p>
            <div className="subheading text-center pt-5">
                <p>Telecommute to anywhere, without acutally being there. Be it reduce travel, improve conversations or enable live monitoring. This revolutionary telepresence solution has uses limited only by your imagination.</p>
            </div>
            <div className="use-case-cards"> 
                <Slider {...settings}>
                    {UseCaseCards.map((card) =>
                        <div key={card.id} className="card-elements" data-aos="fade-up" >
                            
                            <Card>
                                <div key={card.id} className="card-hover-element">
                                    <CardImg top src={card.cardIcon} alt={"icon " + card.id + 1 + ".png"} />
                                    <CardBody>
                                        <CardTitle><h4>{card.cardTopTitle}</h4></CardTitle>                                    
                                    </CardBody>
                                </div>
                                <CardText>
                                    <span class="arrow">
                                        <img src="assets/images/usecase-arrow@2x.svg" alt="arrow" />
                                        <img src="assets/images/usecase-arrow@2x.svg" alt="arrow" />
                                    </span>
                                </CardText>
                            </Card>
                            
                        </div> 
                    )}
                </Slider>
            </div>
        </section>
    )
}


export default UseCases;

