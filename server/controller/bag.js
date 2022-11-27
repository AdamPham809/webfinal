let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm i mongoose --save
// connect with bag model
let Bag = require('../models/bag');
/* CRUD Operation */

module.exports.displayShoppingBag = (req,res,next)=>{
    Bag.find((err, shoppingBag)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            // console.log(shoppingBag);
            res.render('bag/list',{
                title:'Shopping Bag',
            Bag: shoppingBag})
        }
    });
}

module.exports.displayAddPage = (req,res,next)=> {
    res.render('bag/add',{title:'Add an item'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newBag = Bag ({
        "product":req.body.product,
        "size":req.body.size,
        "color":req.body.color,
        "price":req.body.price,
        "quantity":req.body.quantity,
        "subtotal":req.body.subtotal
    });
    Bag.create(newBag,(err,Bag) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/shopping-bag');
        }
    });
    
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Bag.findById(id,(err,bagToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            res.render('bag/edit',{title:'Edit Product', bag:bagToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updateBag = Bag({
        "_id":id,
        "product":req.body.product,
        "size":req.body.size,
        "color":req.body.size,
        "price":req.body.price,
        "quantity":req.body.quantity,
        "subtotal":req.body.subtotal
    });
    Bag.updateOne({_id:id},updateBag,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            res.redirect('/shopping-bag');
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id =req.params.id;
    Bag.deleteOne({_id:id},(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            res.redirect('/shopping-bag');
        }
    });
}