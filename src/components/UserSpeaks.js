import React, {useState} from 'react';
import { UsersSpeak } from '../shared/usersspeak';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function UserSpeaks() {
    const [slide, setCurrentSlide] = useState({currentSlide: 0});
    
    var settings = {
        dots: true,
        dotsClass: 'users-tab',
        arrows: false,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
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
        }
        
    };
    return (
        <section id="users-speak" className="d-none d-md-block">
            <Slider {...settings}>
                {UsersSpeak.map((userspeak) => {
                    return (
                        <div key={userspeak.id} className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className="double-comma-quotation">&#10077;</h1>
                            <p className="heading">Users Speak</p>
                            <p style={{fontSize: "24px", lineheight: "36px"}} className="subheading text-center py-5"><em>" {userspeak.speech} "</em></p>
                            <p className="para-text"><strong>{userspeak.author.toUpperCase()}</strong></p>
                            <p className="para-text-light">{userspeak.designation}</p>
                            <p className="para-text-light">{userspeak.company}</p>
                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}

export default UserSpeaks;
