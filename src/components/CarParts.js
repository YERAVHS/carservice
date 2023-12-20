import React, { useState, useEffect } from 'react';
import partsData from './partsData';
import './style.css';

const CarParts = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [parts, setParts] = useState([]);
    const categoriesData = [
        { id: 1, name: 'Engine' },
        { id: 2, name: 'Transmission' },
    ];

    useEffect(() => {
        const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
        setCategories(storedCategories);

        if (storedCategories.length > 0) {
            setSelectedCategory(storedCategories[0]);
        }

        setParts(partsData);
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(categoriesData.find((c) => c.name === category));
    };

    return (
        <div className="container mt-4" style={{ marginBottom: '200px' }}>
            <h1>Car Details</h1>

            <select
                className="form-control"
                id="category"
                onChange={(e) => handleCategoryChange(e.target.value)}
                defaultValue={selectedCategory ? selectedCategory.name : ''}
            >
                <option value="" disabled>
                    Select Category
                </option>
                {categoriesData.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>

            {selectedCategory && (
                <div className="mt-4">
                    <h2>Selected Category: {selectedCategory.name}</h2>

                    <div className="row">
                        {parts
                            .filter((part) => part.category === selectedCategory.name)
                            .map((part) => (
                                <div key={part.id} className="col-md-4 mb-4">
                                    <div className="card">
                                        <img
                                            src={part.image}
                                            className="card-img-top"
                                            alt={part.name}
                                        />

                                        <div className="card-body">
                                            <h5 className="card-title">{part.name}</h5>
                                            <p className="card-text">{part.description}</p>
                                            <p className="card-text">Price: ${part.price}</p>
                                            <p className="card-text">Part ID: {part.id}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarParts;







