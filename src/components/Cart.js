import React, { useState } from "react";
import partsData from './partsData';

const Cart = () => {
    const [selectedPart, setSelectedPart] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    const handlePartChange = (part) => {
        setSelectedPart(part);
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10) || 1);
    };

    const handleAddToCart = () => {
        if (selectedPart) {
            const newItem = {
                id: selectedPart.id,
                name: selectedPart.name,
                quantity: quantity,
                price: selectedPart.price,
                total: quantity * selectedPart.price,
            };

            setCartItems([...cartItems, newItem]);
            setSelectedPart(null);
            setQuantity(1);
        } else {
            console.log("Select a part before adding to the cart");
        }
    };

    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const handleBuyButtonClick = () => {
        setCartItems([]);
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    return (
        <div className="container mt-5" style={{ marginBottom: "220px" }}>
            <div className="row">
                <div className="col-md-6">
                    <select
                        className="form-control mb-3"
                        id="parts"
                        onChange={(e) => handlePartChange(partsData.find((part) => part.name === e.target.value))}
                        defaultValue={selectedPart ? selectedPart.name : ""}
                    >
                        <option value="" disabled>
                            Select a part
                        </option>
                        {partsData.map((part) => (
                            <option key={part.id} value={part.name}>
                                {part.name}
                            </option>
                        ))}
                    </select>

                    {selectedPart && (
                        <div>
                            <h2>{selectedPart.name}</h2>
                            <p>{selectedPart.description}</p>
                            <p>Price: {selectedPart.price} $.</p>
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                className="form-control mb-3"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="1"
                            />
                            <button className="btn btn-success" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
                    )}
                </div>

                <div className="col-md-6">
                    {cartItems.length > 0 && (
                        <div>
                            <h2>Shopping Cart</h2>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price} $</td>
                                        <td>{item.total} $</td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            <button className="btn btn-warning" style={{marginRight: "10px"}} onClick={handleClearCart}>
                                Clear Cart
                            </button>

                            <button className="btn btn-primary" onClick={handleBuyButtonClick}>
                                Buy
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;



