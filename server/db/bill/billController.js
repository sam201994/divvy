/* other modules */
const jwt = require('jsonwebtoken');

/* other files */
const Bill = require('./billModel.js');
const dbconfig = require('../dbconfig.js');

const controller = {

  createBill: function(req, res, next) {

    console.log("SERVER SIDE SIGNUP");


    let newBill = new Bill({
      totalAmount: req.body.totalAmount,
      discription: req.body.discription,
      members: req.body.members,
      division: req.body.division
    })
    newBill.save(function(err,bill){
      if(err){
        console.log("insinde error of creating bill: ", err);
        return res.json({error: err})
      }
      return res.json({
        success: true,
        message: "bill saved"
      })
    })

  },

  getBills: function(req, res) {

    Bill.find({}, function(err, bills){
    let allBills = {}
        bills.forEach(function(bill) {
  
          allBills[bill._id] = {
            discription: bill.discription, 
            totalAmount: bill.totalAmount,
             division: bill.division,
             members: bill.members
           }
      });
        console.log(allBills);
      return res.json({ allBills });  

    })
  }

};
module.exports = controller;
