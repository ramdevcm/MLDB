const { Router } = require('express');
const { mysql } = require('../database/mysql');

const favlistRouter = Router();


// GET SUPPORT DATA INFORMATION
favlistRouter.get('/', (req, res) => {
	mysql.select('*').from('favlist').then(data => {
		res.send(data);
	});
});


// CUSTOMER SUPPORT
favlistRouter.post("/", async (req, res) => {
	mysql.select('userID').from('user')
	.where('userName', '=', req.body.userName)
	.then(async data => {
		if (data) {
			let userID = data[0].userID;
			await mysql.insert(
			{
					userID: userID,
					favlist: req.body.link
			})
			.into('favlist')
			.then(data => {
				res.json(data);
				console.log("favlist inserted.");
			})
			.catch(err => {
				console.log(err);
				res.status(400).json('Something is wrong.');
			});
		} else {
			console.log('User doesn\'t exist');
		}
	});
});


module.exports = { favlistRouter };