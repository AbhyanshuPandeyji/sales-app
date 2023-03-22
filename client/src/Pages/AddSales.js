import React from 'react'
import './AddSales.css'

const AddSales = () => {
    return (
        <div>
            <h1 className="mt-5 Add-sales">
                ADD   SALES   ENTRY
            </h1>
            <div>
                <form className='mt-5 container col-sm-6 shadow p-3 mb-5 rounded' >
                    <div className="mb-3 m-3">
                        <label for="Product-name" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="Product-name" aria-describedby="Product"/>
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Quantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="Quantity" min="0"/>
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Amount" className="form-label">Amount</label>
                        <input type="number" className="form-control" id="Amount" min="0" />
                    </div>
                    <button type="submit" className="btn btn-primary container col-11 m-3">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default AddSales;
