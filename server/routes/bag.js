let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm i mongoose --save

// connect with bag model

let Bag = require('../models/bag');
let bagController = require('../controller/bag')

/* CRUD Operation */
/* Read Operation */
/* Get route for the bag list */

router.get('/', bagController.displayShoppingBag);

/* Add Operation */
/* Get route for displaying the Add-Page -- Create Operation */
router.get('/add', bagController.displayAddPage);
/* Post route for processing the Add-Page -- Create Operation */
router.post('/add',bagController.processAddPage);
/* Edit Operation */
/* Get route for displaying the Edit Operation -- Update Operation */
router.get('/edit/:id',bagController.displayEditPage);
/* Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id', bagController.processEditPage);
/* Delete Operation */
router.get('/delete/:id', bagController.performDelete);

module.exports=router;