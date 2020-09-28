import React from 'react';
import SliderComponent from './SliderComponent';
import UseCases from './UseCasesComponent';
import ProductFeatures from './ProductFeaturesComponent';
import FAQs from './FAQComponent';
import Contact from './ContactComponent';



const Home = () => {

    return (
        <div className="homepage">
            <SliderComponent/>
            <UseCases/>
            <ProductFeatures/>
            <FAQs/>
            <Contact/>
        </div>
    )
}

export default Home;
