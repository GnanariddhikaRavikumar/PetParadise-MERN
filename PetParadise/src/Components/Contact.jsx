import React from "react";
import './Contact.css';
import Navigationbar from './Navigationbar';

function Contact () {

    return (
        <>
        <Navigationbar/>
        <br/><br/><br/><br/>
            <h2>The greatness of a nation and its moral progress can be judged by the way its animals are treated.-Mahatma Gandhi</h2>
            <div className="contact">
                <img src="https://t4.ftcdn.net/jpg/04/08/81/91/360_F_408819182_dBy5H00vMJSLwW7X3OcKHLRDm8BgUcDy.jpg" alt="location"/>
                <h4>24, Bharathi Nagar, Tiruverkaddu, Chennai</h4><br/>
                <img src="https://static.vecteezy.com/system/resources/previews/022/132/452/non_2x/personal-id-icon-logo-design-vector.jpg" alt="mobile"/>
                <p>9985678912</p><br />
                <img src="https://static.vecteezy.com/system/resources/thumbnails/022/647/958/small/email-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" alt="gmail"/>
                <p>petparadise2016@gmail.com</p><br/>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/066/477/small/simple-customer-service-icon-on-white-background-free-vector.jpg" alt="customer-care"/>
                <p>Customer Care Services</p><br/><p>24 X 7 Service available</p><br/>
                <p>Office working days:Monday to Friday</p><br/>
                <p>For more clarification contact to the mentioned number</p>
            </div><br/><br/>
            <div className="hire">
            <h2>HIRING</h2>
            <img src="https://img.freepik.com/free-vector/gradient-sorry-we-re-closed-signboard_23-2148827933.jpg?t=st=1716146690~exp=1716150290~hmac=602e8ce01511eafa311f9ecb9f085f96c547a378c37388cd8f9e72840fab458d&w=740" alt="hire"/>
            </div>
        </>
    )
}

export default Contact;