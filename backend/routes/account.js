const express = require("express");
const route = express.Router();
const {authMiddleware} =  require("../middleware");
const {Account} = require("../db");
const mongoose = require("mongoose");

route.get("/balance", authMiddleware, async (req,res) => {
    const account = await Account.findOne({userId: req.userId});
    res.status(200).json({balance: account.balance});
});

route.post("/transfer" , authMiddleware, async(req,res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const fromAccount = await Account.findOne({userId : req.userId});

    if(!fromAccount || fromAccount.account < req.body.amount){
        await session.abortTransaction();
        return res.status(400).json({
            msg : "Invalid balance"
        });
    }

    const toAccount = await Account.findOne({userId : req.body.to});

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg : "Invalid account"
        });
    }

    await Account.updateOne(fromAccount, { $inc: {balance : -req.body.amount}}).session(session);
    await Account.updateOne(toAccount, { $inc: { balance: req.body.amount } }).session(session);

    await session.commitTransaction();

    res.json({
        msg : "Transfer successful"
    });

});

module.exports = route;
