// to create functionality to interact with users

import User from "../models/User.js";
// to delete users tweets as well
import Sales from "../models/Sales.js";
import { handleError } from '../error.js'


// get a user - by id because we have one by mongodb
export const getUser = async(req, res, next) => {
    try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
        
    }
    // if anything goes wrong 
    catch (error) {
        next(error);
    }
};

// FUNTIONALITY TO UPDATE USER
export const updateUser = async(req, res, next) => {
    // just an extra layer of security    
    if(req.params.id === req.user.id)
     {   
        try {
            const updatedUser = await User.findByIdAndUpdate(
                // finding the user by id
                req.params.id,
                // then updating its data
                {
                    // sets the given data by user for all
                    $set: req.body,
                },
                {
                    // for setting the new data to be true so it will be saved
                    new: true,
                }
            );

        res.status(200).json(updatedUser);
        } catch(error) {
            next(error);
        }
    } 
    // if every thing fails to match the id given - our profile id
    else{
        return next(handleError(403 , "You can only update your own account"))
    }     
};


// FUNTIONALITY TO DELETE USER
export const deleteUser = async(req, res, next) => {
    // just an extra layer of security    
    if(req.params.id === req.user.id)
     {   
        try {
       
            // to delete the user
            await User.findByIdAndDelete(req.params.id);
            // to delete the users tweets as well
            await Tweet.remove({userId: req.params.id});


        res.status(200).json("User is Deleted");
        } catch (error) {
            next(error);
        }
    } 
    // if every thing fails to match the id given - our profile id
    else{
        return next(handleError(403 , "You can only delete your own account"))
    }     
};





