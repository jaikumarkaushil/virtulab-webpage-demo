import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Features } from '../shared/features';
import Partners from './Partners';
import Application from './Application';
import UsersSpeak from './UserSpeaks';

const RenderFeatures = ({featureTab}) => Features.filter((product) => product.feature === featureTab).map((product) => {
    return(
        <div key={product.id} className="features">
            <Row>
                <Col xs={12} md={6}  className="d-md-flex flex-row justify-content-center">
                    <img src="assets/images/ConceptFeature_1.png" alt="concept_1"/>
                </Col>
                <Col xs={12} md={6} style={{paddingRight: "31px"}}>
                    <p className="featureNumber">0{product.id + 1}</p>
                    <div className="featureContent">
                        <ul><li>{product.feature}</li></ul>
                        <p className="para-text pl-3">{product.description}</p>
                    </div>
                    <div className="buttons">
                        <button className="headerbutton-white mr-md-2">{product.buttonContent_1}</button>
                        <button className="headerbutton-white ml-md-2">{product.buttonContent_2}</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
});

class ProductFeatures extends Component {
    constructor(props) {
        super(props);

        this.toggleTab = this.toggleTab.bind(this);
    }

    state = {
        featureTab: "Self Driving"
    }

    toggleTab(e) {
        let event = e.target.dataset.event;
        this.setState({
            featureTab: this.state.featureTab === String(event) ? "" : String(event)
        })
    }

    render() {
        const { featureTab } = this.state;
        return (
            <section id="features">
                <p className="heading">Product Features</p>
                <hr className="hr-line"/>
                <div className="features-tab">
                    {Features.map((product, index) => {
                        return(
                            <button className={featureTab === product.feature ? "tab-link-active" : "tab-link"} onClick={this.toggleTab} data-event={product.feature} key={index}>{product.feature}</button>
                        )
                    })}
                </div>
                <RenderFeatures featureTab={featureTab}/>
                <Partners/>
                <Application/>
                <UsersSpeak/>
            </section>
        )
    }
}

export default ProductFeatures;

