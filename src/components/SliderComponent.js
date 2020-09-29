import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousels } from '../shared/carousels';
import { Row, Col } from 'reactstrap';
import ReactCursorPosition from 'react-cursor-position';
import { findDOMNode } from 'react-dom';

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



class Robot extends Component {

    constructor(props) {
        super(props);
        
        this.handleMouseEnter = this.handleMouseEnter.bind(this, this.props.handleMouseEnter);
        this.handleMouseMove = this.handleMouseMove.bind(this, this.props.handleMouseMove);
        this.handleMouseLeave = this.handleMouseLeave.bind(this, this.props.handleMouseLeave);
        this.state = {
            style: {},
        }
        this.width = null
        this.height = null
        this.left = null
        this.top = null
        this.transitionTimeout = null
        this.updateCall = null
        this.element = null

        const defaultSettings = {
            reverse: false,
            max: 300,
            perspective: 1000,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
            scale: '1.1',
            speed: '2000',
            transition: true,
            axis: null,
            reset: true
        }

        this.settings = {
            ...defaultSettings,
            ...this.props.options,
          }
        this.reverse = this.settings.reverse ? -1 : 1 
    }

    componentDidMount() {
        this.element = findDOMNode(this)
    }   

    componentWillUnmount() {
        clearTimeout(this.transitionTimeout)
        cancelAnimationFrame(this.updateCall)
    }
    
    handleMouseEnter(cb = () => {}, e) {
        this.updateElementPosition();
        this.setState(prevState => ({
            style: {
            ...prevState.style,
            }
    }))

    this.setTransition()
        return cb(e)
    }

    reset() {
        window.requestAnimationFrame(() => {
            // console.log('RESETTING TRANSFORM STATE',` translate3d(0px,0px,0px)`)
                this.setState(prevState => ({
            style: {
                ...prevState.style,
                transform: "rotate(0.001deg) translate3d(0px,0px,0px)",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
            }
            }))
        })
    }

    handleMouseMove(cb = () => { }, e) {
        e.persist();  
        if (this.updateCall !== null) {
                window.cancelAnimationFrame(this.updateCall)
            }  
        this.event = e
        this.updateCall = requestAnimationFrame(this.update.bind(this, e))  
        return cb(e)
    }

    setTransition() {
        clearTimeout(this.transitionTimeout)
        // console.log('SET TRANSITION', `Speed: ${this.settings.speed}ms Easing: ${this.settings.easing}`)
        this.setState(prevState => ({
        style: {
            ...prevState.style,
            transition: `${this.settings.speed}ms ${this.settings.easing}`,
        }
        }))
        this.transitionTimeout = setTimeout(() => {
        // console.log('TRANSITION COMPLETE')
            this.setState(prevState => ({
            style: {
                ...prevState.style,
                transition: '',
            }
            }))
        }, this.settings.speed)
    }
    handleMouseLeave(cb = () => { }, e) {
        this.setTransition();  
        if (this.settings.reset) {
            this.reset()
        }  
        return cb(e)
    }

    getValues(e) {
        const x = (e.nativeEvent.clientX  - this.left) / this.width
        const y = (e.nativeEvent.clientY  - this.top) / this.height
        const _x = Math.min(Math.max(x, 0), 1)
        const _y = Math.min(Math.max(y, 0), 1)  
        const moveX = ((this.settings.max - _x * this.settings.max)).toFixed(2)
        const moveY = ((_y * this.settings.max - this.settings.max)).toFixed(2)  
        const percentageX = _x * 100
        const percentageY = _y * 100  
        // console.log('JUST GOT NEW VALUES', `X: ${x} Y: ${y} -- TILT X: ${moveX} TILT Y: ${moveY} -- TILT X%: ${percentageX} TILT Y%: ${percentageY}`)
        // console.log('Notice how X turned into percentageX.')  
        return {
            moveX,
            moveY,
            percentageX,
            percentageY,
        }
    }

    updateElementPosition() {
        const rect = this.element.getBoundingClientRect()
        this.width = this.element.offsetWidth
        this.height = this.element.offsetHeight
        this.left = rect.left
        this.top = rect.top
        // console.log('REKT', rect)
        // console.log('OFFSET WIDTH', this.element.offsetWidth)
        // console.log('OFFSET HEIGHT', this.element.offsetHeight)
    }

    update(e) {
        let values = this.getValues(e)
        // console.log('VALUES', values)  
        // console.log('NEW CSS TRANSFORM VALUES', ` moveX(${this.settings.axis === 'x' ? 0 : values.moveX}px)`)
        this.setState(prevState => ({
          style: {
            ...prevState.style,
            transform: `translateX(${this.settings.axis === 'x' ? 0 : values.moveX}px)`,
          }
        }))  
        this.updateCall = null
      }
      
    render() {
        const style = {
            ...this.props.style,
            ...this.state.style
          }
        return (
            <div className="robot" data-depth={0.2} style={style}
            onMouseEnter={this.handleMouseEnter}
            onMouseMove={this.handleMouseMove}
            onMouseLeave={this.handleMouseLeave}>
                <div className="photo-stand">
                    <img src="/assets/images/Robo-1_1.png" alt="stnad.ng"/>
                </div>
                <div className="photo-stand-bottom">
                    <img src="/assets/images/stand-bottom.png" alt="group.png"/>
                </div>
                <div className="ellipse-photo-stand-bottom"></div>
            </div>
        )
    }
}


class SliderComponent extends Component {
    render(){
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
            <div className="carousel-background"></div>
            <Slider {...settings}>
                {Carousels.map((carousel) => {
                    return(
                        <div key={carousel.id} className="slider-item">
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
                            <div className="robot-stand">
                                <Robot/>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}
}

export default SliderComponent
