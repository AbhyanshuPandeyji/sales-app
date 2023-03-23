// this is for the tweets logic to be done

// importing tweet schema
import Sales from '../models/Sales.js'

// error handling
import {handleError} from '../error.js'

// For getting the tweets of out users
import User from "../models/User.js"
import { getAllSales } from './sale';


// posting a tweet
export const createSales = async (req, res, next) => { // taking tweet schema and passign the tweet done by user to the schema - description of the tweet

    const newSale = new Sales(req.body);
    try { // saving new tweet given by user
        const savedSale = await newSale.save();
        res.status(200).json(savedSale);
    } catch (error) {
        handleError(500, error);
    }

};

// deleting a tweet
export const deleteSale = async (req, res, next) => {

    try { // finding tweet by its id - await to get the data
        const sale = await Sales.findById(req.params.id);
        // if tweet id matched to the id given by user for the tweet then
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


// FUNTIONALITY TO TO GET All tweets that been done in the app
export const getAllSales = async (req, res, next) => {

    try { 
  
        // find all tweets done by our user using the id in tweet body
        const getAllSales  = await Sales.find({}).sort({
            createdAt : -1,
        })
        
        // we take our tweets and all all the followers tweets together
        res.status(200).json(getAllSales);
    } catch (error) {
        handleError(500, error);
    }
 
};
