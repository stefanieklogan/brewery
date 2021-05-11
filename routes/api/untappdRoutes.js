const router = require("express").Router();
// returns 25 records max, can limit to under 25
//VENUE_ID (int, required) - The Venue ID that you want to display checkins
// client_id and client_secret (string, required) -pass the client_id and client_secret for unauthorized calls
///v4/venue/checkins/VENUE_ID
//104959
const passport = require("passport");

passport.use(new UntappdStrategy({
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	// redirect after login
	callbackURL: 'https://www.example.net/auth/untappd/callback'
}, function (accessToken, refreshToken, profile, done) {
	User.findOrCreate({ untappdId: profile.id }, function (err, user) {
		done(err, user);
	});
}));

app.get('/auth/untappd', passport.authenticate('untappd'));

app.get('/auth/untappd/callback',
	passport.authenticate('untappd', { failureRedirect: '/login' }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect('/');
	});
	
var UntappdClient = require("node-untappd");
var debug = false;
var untappd = new UntappdClient(debug);

var clientId = process.env.CLIENT_ID;
var clientSecret = process.env.CLIENT_SECRET;

// Set to true if you want to see all sort of nasty output on stdout
var debug = false;

// The user we want to lookup for this example
var data = {};
data.USERNAME = "[ some user name ]";

// Create Client
var untappd = new UntappdClient(debug);
untappd.setClientId(clientId);
untappd.setClientSecret(clientSecret);

// EXAMPLE - List last 25 recent checkins of the given user
untappd.userActivityFeed(function (err, obj) {
	if (debug) console.log(err, obj);
	if (obj && obj.response && obj.response.checkins && obj.response.checkins.items) {
		var beers = obj.response.checkins.items.forEach(function (checkin) {
			console.log(checkin);
			console.log(checkin.user.user_name, "drank", checkin.beer.beer_name);
			console.log("by", checkin.brewery.brewery_name);
			if (checkin.venue.venue_name)
				console.log("at", checkin.venue.venue_name);
			console.log("on", checkin.created_at);
		});
	} else {
		console.log(err, obj);
	}
}, data);

module.exports = router;