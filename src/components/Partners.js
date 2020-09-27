import React from 'react'

function Partners() {
    const partnersList = ["assets/images/kone.png","assets/images/cognizant.png","assets/images/linkedin.png","assets/images/gsk.png","assets/images/ge.png"];
    const partners = partnersList.map((partner, index) => {
        return(
            <img style={{opacity: "0.5"}} src={partner} alt="partners.png" key={index}/>
        )
    })
    return (
        <section id="globalPartners">
            <p className="heading">Globally Trusted</p>
            <div className="subheading text-center">
                <p>With 12,000+ robots used worldwide, Double is a world leader in telepresence robots.</p>
            </div>
            <div className="d-flex align-items-center justify-content-between pt-5">
                {partners}
            </div>
        </section>
    )
}

export default Partners;
