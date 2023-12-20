import React from 'react';
import './style.css';
import news1 from '../images/newss1.jpg';
import news2 from '../images/news2.jpg';
import news3 from '../images/news3.png';
import news4 from '../images/news4.jpg';
const Home = () => {
    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-4">Car Dealership Updates</h1>

            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card mb-4">
                        <img
                            src={news1}
                            className="card-img-top"
                            alt="Service Center"
                        />
                        <div className="card-body">
                            <h5 className="card-title">New Service Center</h5>
                            <p className="card-text">
                                We are excited to announce the opening of our new state-of-the-art service center.
                                Our team is ready to provide top-notch maintenance and repairs for your vehicles.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mx-auto">
                    <div className="card mb-4">
                        <img
                            src={news2}
                            className="card-img-top"
                            alt="Car Showroom"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Latest Car Models</h5>
                            <p className="card-text">
                                Explore our showroom and discover the latest car models from leading manufacturers.
                                Schedule a test drive and experience the thrill of driving your dream car.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card mb-4">
                        <img
                            src={news3}
                            className="card-img-top"
                            alt="Upcoming Events"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Upcoming Events</h5>
                            <p className="card-text">
                                Stay tuned for our upcoming events, including car launches, test drive days,
                                and special promotions. Don't miss out on the excitement!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mx-auto">
                    <div className="card mb-4">
                        <img
                            src={news4}
                            className="card-img-top"
                            alt="Customer Testimonials"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Customer Testimonials</h5>
                            <p className="card-text">
                                Read what our satisfied customers have to say about their experience with us.
                                We take pride in providing excellent service and building lasting relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
