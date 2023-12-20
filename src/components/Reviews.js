// Reviews.jsx

// Reviews.jsx

import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <div className="container" style={{marginBottom: "100px"}}>
            <h1>Customer Reviews</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th colSpan="2">Review</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowSpan="2">John Doe</td>
                    <td>
                        "Great experience buying a car from this dealership. The staff was friendly and helpful,
                        and the process was smooth. Highly recommend!"
                    </td>
                </tr>
                <tr>
                    <td>
                        "Another positive review from John Doe. This dealership provides excellent service."
                    </td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>
                        "Visited the service center for maintenance, and I'm impressed with the efficiency and
                        professionalism. Will definitely come back."
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Reviews;


