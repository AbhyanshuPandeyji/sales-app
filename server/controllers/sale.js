// this is for the sales logic to be done

// importing sale schema
import Sales from '../models/Sales.js'

// error handling
import {handleError} from '../error.js'

// For getting the sale of out users
import User from "../models/User.js"


// posting a sale
export const createSales = async (req, res, next) => { 

    const newSale = new Sales(req.body);
    try { // saving new sale given by user
        const savedSale = await newSale.save();
        res.status(200).json(savedSale);
    } catch (error) {
        handleError(500, error);
    }

};

// deleting a tweet
export const deleteSale = async (req, res, next) => {

    try { // finding sale by its id - await to get the data
        const sale = await Sales.findById(req.params.id);
        // if sale id matched to the id given by user for the sale then
        if (sale.userId === req.body.id) {
            await sale.deleteOne();
            res.status(200).json("Tweet has been Deleted");
        } else {
            handleError(500, error);
        }
    } catch (error) {

        handleError(500, error);
    }

};


// FUNTIONALITY TO TO GET All sale that been done in the app
export const getAllSales = async (req, res, next) => {

    try { 
  
        // find all sales done
        const getAllSales  = await Sales.find({}).sort({
            createdAt : -1,
        })
        
        // we take our sales
        res.status(200).json(getAllSales);
    } catch (error) {
        handleError(500, error);
    }
 
};

// FUNTIONALITY TO TO GET All sales that been done in the app
export const getTotalRevenue = async (req, res, next) => {

    try { 
  
        // find all sales done by our user using the id in sales body
        const getAllSales  = await Sales.find({})

        const total = getAllSales.map((ele)=>{
            return ele+= ele.quantity * ele.amount;
        });


        
        // we take our sales total individual
        res.status(200).json(total);
    } catch (error) {
        handleError(500, error);
    }
 
};
