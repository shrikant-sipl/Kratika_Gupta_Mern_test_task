var express = require('express');
var router = express.Router();

const auth = require('../auth/index');
let controller = require('../controller/userController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//Token Generator used for user and api authenticaion
router.get('/auh-token-generator', controller.tokenGenerator);

//test for auth api
router.get('/get-all-users', auth.isLoginAPI, controller.getAllUser);

//get active campaigns
router.get('/get-active-campaign', auth.isLoginAPI, controller.getActiveCampaign);

//create capaign
router.post('/create-capaign', auth.isLoginAPI, controller.createCampaign);

//get all crypto currency list
router.get('/get-all-crypto-currency', auth.isLoginAPI, controller.getAllCryptoCurrency);

// donate amount
router.post('/donate-amount',auth.isLoginAPI, controller.donateAmount)

// get all donation corresponding to perticular campaign 
router.get('/get-all-donation-of-campaign/:id', auth.isLoginAPI , controller.getAllDonationCorrespondingToPerticularCampaign)




module.exports = router;
