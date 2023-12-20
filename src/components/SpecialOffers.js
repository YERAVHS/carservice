import React from 'react';
import './style.css';

const SpecialOffers = () => {
    return (
        <div className="container mt-5" style={{marginBottom: "20px"}}>
            <h1>Special Offers</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Limited Time Offer</h5>
                    <p className="card-text">
                        Save big on selected car models. Don't miss out on this limited-time promotion!
                    </p>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">Service Center Discount</h5>
                    <p className="card-text">
                        Receive a discount on your next service appointment. Keep your car in top condition!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;
