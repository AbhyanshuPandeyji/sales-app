import express from "express";
import { verifyToken } from "../verifyToken.js";
import { deleteSale  , getAllSales , createSales , getTotalRevenue } from "../controllers/sale.js";



// initialize route
const router = express.Router();

// posting a tweet -  on the root so for everyone to see in even if not following  to the tweet section of the app
router.post('/' ,verifyToken , createSales);


// to delete the tweet - id is required of the tweet
router.delete('/:id' ,verifyToken , deleteSale );

// get Explore Tweets
router.get("/allsales" , getAllSales);

// total revenue
router.get("/totalrevenue" , getTotalRevenue );


export default router;
