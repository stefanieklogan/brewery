const router = require("express").Router();

const cliID = process.env.CLIENT_ID;
const cliSec = process.env.CLIENT_SECRET;
const bID = process.env.BID;
const compact = false;

// /api/untappd
router.route("/")
	.get(
		"https://api.untappd.com/v4/brewery/info" +
		bID +
		"?client_id=" + cliID +
		"&client_secret=" + cliSec +
		"&compact=" + compact)

		//response.brewery.beer_list.items[isArray]
// items[0].beer.beer_label
// items[0].beer.beer_name
//items[0].beer.beer_style
//items[0].beer.beer_description

module.exports = router;
//const limit = 1;
//const beerID = 0;
//const checkinNum = 0;
	// getBreweryCheckins: function () {
	// 	return (
	// 		axios.get(
	// 			"https://api.untappd.com/v4/brewery/checkins/" +
	// 			bID +
	// 			"?client_id=" + cliID +
	// 			"&client_secret=" + cliSec +
	// 			"&limit=" + limit
	// 		));
	// },
	// getBeerInfo: function () {
	// 	return (
	// 		axios.get(
	// 			"https://api.untappd.com/v4/beer/info/" + beerID +
	// 			"?client_id=" + cliID +
	// 			"&client_secret=" + cliSec
	// 		));
	// },
	// getCheckinData: function () {
	// 	return (
	// 		axios.get(
	// 			"https://api.untappd.com/v4/checkin/view/" + checkinNum +
	// 			"?client_id=" + cliID +
	// 			"&client_secret=" + cliSec
	// 		));
	// }

// const passport = require("passport");

// passport.use(new UntappdStrategy({
// 	clientID: process.env.CLIENT_ID,
// 	clientSecret: process.env.CLIENT_SECRET,
// 	// redirect after login
// 	callbackURL: 'https://www.example.net/auth/untappd/callback'
// }, function (accessToken, refreshToken, profile, done) {
// 	User.findOrCreate({ untappdId: profile.id }, function (err, user) {
// 		done(err, user);
// 	});
// }));

// app.get('/auth/untappd', passport.authenticate('untappd'));

// app.get('/auth/untappd/callback',
// 	passport.authenticate('untappd', { failureRedirect: '/login' }),
// 	function (req, res) {
// 		// Successful authentication, redirect home.
// 		res.redirect('/');
// 	});

// var UntappdClient = require("node-untappd");
// var debug = false;
// var untappd = new UntappdClient(debug);

// var clientId = process.env.CLIENT_ID;
// var clientSecret = process.env.CLIENT_SECRET;

// // Set to true if you want to see all sort of nasty output on stdout
// var debug = false;

// // The user we want to lookup for this example
// var data = {};
// data.USERNAME = "[ some user name ]";

// // Create Client
// var untappd = new UntappdClient(debug);
// untappd.setClientId(clientId);
// untappd.setClientSecret(clientSecret);

// // EXAMPLE - List last 25 recent checkins of the given user
// untappd.userActivityFeed(function (err, obj) {
// 	if (debug) console.log(err, obj);
// 	if (obj && obj.response && obj.response.checkins && obj.response.checkins.items) {
// 		var beers = obj.response.checkins.items.forEach(function (checkin) {
// 			console.log(checkin);
// 			console.log(checkin.user.user_name, "drank", checkin.beer.beer_name);
// 			console.log("by", checkin.brewery.brewery_name);
// 			if (checkin.venue.venue_name)
// 				console.log("at", checkin.venue.venue_name);
// 			console.log("on", checkin.created_at);
// 		});
// 	} else {
// 		console.log(err, obj);
// 	}
// }, data);