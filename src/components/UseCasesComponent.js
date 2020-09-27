
import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
// import { CSSTransition } from 'react-transition-group';


const RenderEachCard = ({toggleHover, index, cardIcons, cardTopTitles}) => {
    return (
        <Card>
            <CardImg top src={cardIcons[index]} alt={"icon " + index + 1 + ".png"} />
            <CardBody className={index === toggleHover ? "slideHover" : null }>
                <CardTitle><h3>{cardTopTitles[index]}</h3></CardTitle>                                    
                <CardText>
                    <img src="assets/images/usecase-arrow@2x.svg" alt="arrow" />
                </CardText>
            </CardBody>
        </Card>
    )
}

class UseCases extends Component {
    state = {
        hover: null,
        cardItems: [0,1,2,3,4],
        cardIcons: ["assets/images/usecase-icon_1@2x.svg", "assets/images/usecase-icon_2@2x.svg", "assets/images/usecase-icon_3@2x.svg", "assets/images/usecase-icon_4@2x.svg", "assets/images/usecase-icon_5@2x.svg"],
        cardTopTitles: ["In the Office", "Host Customer Tours", "At Factories, Plants & Warehouses", "Healthcare & Education", "At Retail & Events"],
    }

    toggleHover = (e) => {
        let event = e.target.dataset.event;
        this.setState({
            hover:  this.state.hover  === Number(event) ? false : Number(event)
        })
    }

    render() {
        const { cardItems, cardIcons, cardTopTitles} = this.state;
        return (
            <section id="use-cases">
                <p className="heading">Telepresence Robot</p>
                <div className="subheading text-center pt-5">
                    <p>Telecommute to anywhere, without acutally being there.<br/>Be it reduce travel, improve conversations or enable live monitoring - this revolutionary telepresence<br/> solution has uses limited only by your imagination.</p>
                </div>
                <div className="use-case-cards d-flex flex-row justify-content-between">
                    {cardItems.map((card) => 
                        <RenderEachCard toggleHover={this.toggleHover} hover={this.state.hover} index={card} cardIcons={cardIcons} cardTopTitles={cardTopTitles} key={card}/>
                    )}
                </div>
            </section>
        )
    }
}

export default UseCases;

