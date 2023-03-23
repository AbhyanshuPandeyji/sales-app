import mongoose from 'mongoose';


const AddSalesSchema = new mongoose.Schema(
    {
        // Tweeted by could be used for assignment
        userId:{
            type: String,
            required : true,
        },
        product: {
            type: String,
            required: true,
            // no of character to be inputed
            max: 100,
        },
        quantity:{
            type: Number,
            defaultValue: 0,
        },
        amount:{
            type: Number,
            defaultValue: 0,
        },

    },
    {timestamps: true}
);

// Tweet to identify in the database and the Tweet schema is the value we send in the database
export default mongoose.model('Sales' , AddSalesSchema );