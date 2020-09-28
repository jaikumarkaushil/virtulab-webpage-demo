import React, { Component } from 'react'
import { FAQs } from '../shared/faqs';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: null,
        };
    }

    toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? null : Number(event)});
    }
    render() {
        const {collapse} = this.state;
        return (
            <section id="FAQs" className="d-none d-md-block"> 
                <p className="heading pb-5">FAQs</p>
                <img src="assets/images/design.png" alt="design" />
                {FAQs.map((faq,index) => {
                    return (
                        <Card style={collapse === index ? {backgroundColor: "rgb(36,34,137)"} : {backgroundColor: "rgb(29,27,110)"}} key={index}>
                            <CardHeader style={{fontSize: "20px", lineHeight: "23px"}} onClick={this.toggle} data-event={index}><strong className="colortheme-orange pr-4">{collapse === index ? "-" : "+"}</strong>{faq.title}</CardHeader>
                            <Collapse isOpen={collapse === index}>
                                <CardBody className="para-text">{faq.answer}</CardBody>
                            </Collapse>
                        </Card>
                    )
                })}
            </section>
        )
    }
}

export default FAQ


