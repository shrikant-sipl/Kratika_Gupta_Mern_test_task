
let jwt = require('jsonwebtoken');

let db = require("../Database/index");
let users = db.users
let campaign = db.campaign;
let cryptoCurrency = db.currency;
let donation = db.donation
// let { setExpiration } = require('../public/javascripts/setCampaignStatus');


// function to set status of campaign to expired when campaign expiration date is complete




//token Generator
let tokenGenerator = async (req, res) => {
    try {
        let token = jwt.sign({ "Crpto": "MERN_PROJECT" }, '3425h435%$%#^@^*#$^Nfnsr7477247n2567nset@#gyuonx57', { expiresIn: "1d" })
        res.status(200).send({
            "message": "Token generated successfully",
            "auth_token": token,
        })
    } catch (error) {
        console.error(error);
    }
}

//get user
let getAllUser = async (req, res) => {
    try {
        let result = await users.findAll({ raw: true });
        res.status(200).send({
            message: "all users fetch successfully",
            data: result,
        })
    } catch (error) {
        console.error(error);
    }
}

// getActiveCampaign
let getActiveCampaign = async (req, res) => {
    try {

        let date = new Date();
        let currentDay = date.getDate();
        let tempDate = currentDay < 10 ? "0" + currentDay : currentDay
        let currentYear = date.getFullYear();
        let currentMonth = date.getMonth() + 1;
        tempMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth
        let currentDate = currentYear + "-" + tempMonth + "-" + tempDate;

        let campaignResult = await campaign.findAll({
            where: {
                status: "active"
            },
            raw: true
        })

        campaignResult.forEach(element => {
            let arr = [];
            let temp = {
                id: element.id,
                date: element.expiration_date
            }
            arr.push(temp);
            arr.forEach(async (el) => {
                if (el.date == currentDate) {

                    await campaign.update({ status: "expired" }, {
                        where: {
                            id: el.id
                        }
                    })
                }
            })
        });
        res.status(200).send({
            message: "campaign fetch successfully",
            data: campaignResult,
        })
    } catch (error) {
        console.error(error);
    }
}

let createCampaign = async (req, res) => {
    try {

        const { name, description, budget_amount, status, expiration_date } = req.body;

        console.log(req.body);

        let reqData = {
            name: name,
            description: description,
            budget_amount: budget_amount,
            status: status,
            expiration_date: expiration_date
        }

        await campaign.create(reqData);

        res.status(200).send({
            message: "campaign created successfully"
        })

    } catch (error) {
        console.error(error);
    }
}

//getAllCryptoCurrency
let getAllCryptoCurrency = async (req, res) => {
    try {
        let getAllCryptoCurrencyResult = await cryptoCurrency.findAll({ raw: true });

        res.status(200).send({
            message: "Crypto Currency fetched successfully",
            data: getAllCryptoCurrencyResult
        })

    } catch (error) {
        console.error(error);
    }
}

// donateAmount
let donateAmount = async (req, res) => {
    try {
        const { currency, donation_amount, id, total_amount } = req.body

        let reqData = {
            currency: currency,
            donation_amount: donation_amount,
            total_amount: total_amount,
            fk_campaign_id: id
        }
        await donation.create(reqData);

        res.status(200).send({
            messagge: "Done amount has been successfully added"
        })

    } catch (error) {
        console.error(error);
    }
}

// get All Donation Corresponding To Perticular Campaign
let getAllDonationCorrespondingToPerticularCampaign = async (req, res) => {
    try {
        let donationOfPerticularCampaignResult = await campaign.findAll({
            where: { id: req.params.id },
            include: [{ model: donation, as: 'donation' }],
            nest: true
        })

        res.status(200).send({
            message: "donation fetched successfully",
            data: donationOfPerticularCampaignResult
        })

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    tokenGenerator, getAllUser, getActiveCampaign,
    createCampaign, getAllCryptoCurrency, donateAmount,
    getAllDonationCorrespondingToPerticularCampaign
}