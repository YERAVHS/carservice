import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const CarCard = ({ car }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card" style={{ maxWidth: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{car.make} {car.model}</h5>
                    <p className="card-text">Year: {car.year}</p>
                    <p className="card-text">Type: {car.type}</p>
                </div>
            </div>
        </div>
    );
};

const Cars = () => {
    const [carsData, setCarsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        /*eslint-disable no-undef*/
        const fetchCarsData = async (retryCount = 0) => {
            const options = {
                method: 'GET',
                url: 'https://car-data.p.rapidapi.com/cars',
                params: {
                    limit: '10',
                    page: '0'
                },
                headers: {
                    'X-RapidAPI-Key': '26dbbed4d4mshd27e228660ce3c1p1c4c8cjsn579d9ef14891',
                    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setCarsData(response.data);
            } catch (error) {
                console.error(error);
                if (error.response) {
                    console.error('Server responded with status:', error.response.status);
                    console.error('Response data:', error.response.data);
                } else if (error.request) {
                    console.error('No response received from the server');
                } else {
                    console.error('Error setting up the request:', error.message);
                }
                setError('Error fetching data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        const delay = 1000;
        setTimeout(() => {
            fetchCarsData();
        }, delay);
    }, []);

    if (loading) {
        return <div role="status" style={{marginBottom: "300px", textAlign: "center", marginTop: "100px"}}><span className="sr-only">Loading...</span></div>;
    }

    if (error) {
        return <div className="alert alert-danger" style={{marginBottom: "300px", marginTop: "10px", }}>Error: {error}</div>;
    }

    return (
        <div style={{ marginLeft: "20px", textAlign: "center" }}>
            <h1>Available Cars</h1>
            <div className="row">
                {carsData.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Cars;




