import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage1 from '../images/slide1.jpg';
import backgroundImage2 from '../images/slide2.jpg';
import backgroundImage3 from '../images/slide3.jpg';
import {Carousel} from "react-bootstrap";
import './style.css';

const AboutUs = () => {
    return (
        <div>
            <div className="container-fluid">
                <Carousel style={{ maxWidth: '800px', margin: 'auto' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={backgroundImage1}
                            alt="First slide"
                            style={{ objectFit: 'cover', maxHeight: '400px'}}
                        />
                        <Carousel.Caption>
                            <h3>Welcome to the Car Sales company!</h3>
                            <p>Immerse yourself in a world of possibilities with
                                our diverse selection of high-quality vehicles,
                                tailored to your style and preferences.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={backgroundImage2}
                            alt="Second slide"
                            style={{ objectFit: 'cover', maxHeight: '400px'}}
                        />
                        <Carousel.Caption>
                            <h3>Exceptional Service</h3>
                            <p>Experience transparency, integrity,
                                and exceptional service from the moment
                                you step into our showroom.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={backgroundImage3}
                            alt="Third slide"
                            style={{ objectFit: 'cover', maxHeight: '400px'}}
                        />
                        <Carousel.Caption>
                            <h3>Memorable Car-Buying Journey</h3>
                            <p>Thank you for choosing Car Sales.
                                We look forward to the opportunity to
                                make your car-buying journey memorable and enjoyable.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <hr />

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 className="text-center">ABOUT US</h1>
                        <p className="text-center">
                            Welcome to Car Sales, your trusted partner in finding the perfect
                            vehicle. With years of experience in the automotive industry, we strive
                            to provide you with a seamless and enjoyable car-buying experience.
                        </p>
                        <p className="text-center">
                            At Car Sales, we offer a diverse range of high-quality vehicles to suit
                            every taste and budget. Our team of dedicated professionals is
                            passionate about helping you find the car that meets your needs.
                        </p>
                        <p className="text-center">
                            Customer satisfaction is our top priority. We are committed to
                            transparency, integrity, and providing exceptional service from the
                            moment you step into our showroom to the day you drive off in your
                            dream car.
                        </p>
                        <p className="text-center">
                            Thank you for choosing Car Sales. We look forward to serving you and
                            making your car-buying journey memorable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;


