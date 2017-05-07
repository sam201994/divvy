/* modules */
const jwt = require('jsonwebtoken');

/* files */
const Bill = require('./billModel.js');
const dbconfig = require('../dbconfig.js');

const controller = {

  createBill: function(req, res, next) {

    let newBill = new Bill({
      totalAmount: req.body.totalAmount,  // FPRMAT
      discription: req.body.discription,  // "food"
      members: req.body.members,          //['soi', 'goku','sam']
      division: req.body.division         //[['soi', 'goku', 1], ['goku', 'sam', 4]]
    })
    newBill.save(function(err,bill){
      if(err){
        return res.json({error: "Bill not created"})
      }
      return res.json({
        success: true,
        message: "bill saved"
      })
    })
  },

  getBills: function(req, res) {

    Bill.find({}, function(err, bills){   // Receing as an Object of bills 
    let allBills = {}
      bills.forEach(function(bill) {  
        allBills[bill._id] = {
        discription: bill.discription, 
        totalAmount: bill.totalAmount,
        division: bill.division,
        members: bill.members
      }
    });
    return res.json({ allBills });  
    })
  }

};

module.exports = controller;
