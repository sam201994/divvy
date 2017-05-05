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
    
  }

};
module.exports = controller;
