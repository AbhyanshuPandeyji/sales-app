import React, {useState} from 'react'

import {useSelector} from 'react-redux';
import axios from 'axios';

import './AddSales.css'

import Login from './Login.js';


const AddSales = () => {


    const {currentUser} = useSelector((state) => state.user);

    // text in tweet
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [amount, setAmount] = useState("");

    // for posting tweet into database
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const submitSales = await axios.post('/sales', {
                userId: currentUser._id,
                product: product,
                quantity: quantity,
                amount: amount
            });
            
            // refresh after posting tweet
            console.log(submitSales);
            window.location.reload(false);

        } catch (error) {
            console.log('error', error);
        }
    }


    return (
        <>{!currentUser ? (<Login/>) : (
        <div> {
            currentUser && (
                <h1 className="font-bold pl-2 my-2 pt-5">
                    User : {
                    currentUser.firstname
                }</h1>
            )
        }
            <h1 className="mt-5 Add-sales">
                ADD   SALES   ENTRY
            </h1>
            <div>
                <form className='mt-5 container col-sm-6 shadow p-3 mb-5 rounded'>
                    <div className="mb-3 m-3">
                        <label for="Product-name" className="form-label">Product Name</label>
                        <input onChange={
                                (e) => setProduct(e.target.value)
                            }
                            type="text"
                            className="form-control"
                            id="Product-name"
                            placeholder='Product'/>
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Quantity" className="form-label">Quantity</label>
                        <input onChange={
                                (e) => setQuantity(e.target.value)
                            }
                            type="number"
                            className="form-control"
                            id="Quantity"
                            placeholder='Quantity'
                            min="0"/>
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Amount" className="form-label">Amount</label>
                        <input onChange={
                                (e) => setAmount(e.target.value)
                            }
                            type="number"
                            className="form-control"
                            id="Amount"
                            placeholder='Amount'
                            min="0"/>
                    </div>
                    <button onClick={handleSubmit}
                        type="submit"
                        className="btn btn-primary container col-11 m-3">Submit</button>
                </form>
            </div>
        </div>) }
        </>

    )
}

export default AddSales;
