import React from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Col } from 'reactstrap';


function Contact (props) {

    // below will keep track the submitted data 
    const { register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section id="contact" className="d-none d-md-flex flex-column justify-content-center align-items-center">
            <div className="side-stand">
                <img src="assets/images/contact-stand.png" alt="stand.png" />
                <img src="assets/images/contact_stand_bottom.png" alt="stand_bottom.png" />
                <div className="side-stand-ellipse"></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center" >
            <h1 className="pb-4 heading-light">The Future Is Ready. Are you?</h1>
                <FormGroup className="d-inline-flex">
                    <Col xs={12} md={6} className="p-0 text-left">
                        <input name="firstname" type="text" className="input mb-3" ref={register({minLength: 3, maxLength: 15})} placeholder="First Name" />
                        {errors.firstname?.type === "maxLength" && "Firstname exceed maxLength 15"}
                        {errors.firstname?.type === "minLength" && "Firstname must have 2 letters"}
                    </Col>
                    <Col xs={12} md={6} className="p-0 text-right">
                    <input name="lastname" 
                        type="text" 
                        className="input mb-3" 
                        placeholder="Last Name"
                        ref={register({ 
                                required: true, 
                                minLength: 3, 
                                maxLength: 15 
                                })} 
                    />
                    {errors.lastname?.type === "required" && "Lastname is required"}
                    {errors.lastname?.type === "maxLength" && "Lastname exceed maxLength 15"}
                    {errors.lastname?.type === "minLength" && "Lastname must have 2 letters"}
                    </Col>
                </FormGroup>
                    
                <FormGroup className="d-inline-flex">
                    <Col xs={12} md={6} className="p-0 text-left">
                        <input placeholder="Email"
                            name="email"
                            type="text"
                            className="input mb-3"
                            ref={register({
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                // value: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/,
                                message: "invalid email address"
                            }
                            })}
                        />
                        {errors.email && errors.email.message}
                    </Col>
                    <Col xs={12} md={6} className="p-0 text-right">
                        <input placeholder="Phone Number"
                            name="phonenum"
                            className="input mb-3"
                            type="tel"
                            ref={register({
                            required: "Required",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Invalid! Only Number can be entered"
                            },
                            maxLength: 11, 
                            })}
                        />
                        {errors.phonenum && errors.phonenum.message}
                    </Col>
                </FormGroup>
    
                <FormGroup>
                    <input name="comments" className="input-full mb-3" ref={register} placeholder="Write your comments here!"/>
                </FormGroup>
                <FormGroup className="d-inline-flex justify-content-center align-items-center mb-3" >
                    <div className="form-check px-4">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userCategory"
                            value="testDrive"
                            id="testDrive"
                            ref={register}
                        />
                        <label className="form-check-label" htmlFor="testDrive">
                            Test Drive
                        </label>
                    </div>
                    <div className="form-check px-4">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userCategory"
                            value="buyNow"
                            id="buyNow"
                            ref={register}
                        />
                        <label className="form-check-label" htmlFor="buyNow">
                            Buy Now
                        </label>
                    </div>
                    <div className="form-check px-4">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userCategory"
                            value="requestCallback"
                            id="requestCallback"
                            ref={register}
                        />
                        <label className="form-check-label" htmlFor="requestCallback">
                            Request Callback
                        </label>
                    </div>
                </FormGroup>
                <button type="submit" className="headerbutton-white mt-4 mb-0" >Submit</button> {/*disabled when user submits the edit, will disable when user changes the field values*/}
            </form>
        </section>
    );
}

export default Contact;
