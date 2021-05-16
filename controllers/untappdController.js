const cliID = process.env.CLI_ID;
const cliSec = process.env.CLI_SEC;
const bID = process.env.BID;
const limit = 1;
const beerID = 0;
const checkinNum = 0;
const fetch = require("node-fetch");

module.exports = {
  searchBeers: function (req, res) {
    fetch("https://api.untappd.com/v4/brewery/info/" +
      bID +
      "?client_id=" + cliID +
      "&client_secret=" + cliSec)
      .then(response => {
        return response.json()
      }).then(data => {
        res.json(data.response.brewery.beer_list.items)
      }).catch(err => {
        res.json(err)
      });
  },
  getBreweryCheckins: function () {
    fetch(
      "https://api.untappd.com/v4/brewery/checkins/" +
      bID +
      "?client_id=" + cliID +
      "&client_secret=" + cliSec +
      "&limit=" + limit
    ).then(response => {
      return response.json()
    }).then(data => {
      res.json(data)
    }).catch(err => {
      res.json(err)
    });
  },
  getBeerInfo: function () {
    fetch(
      "https://api.untappd.com/v4/beer/info/" + beerID +
      "?client_id=" + cliID +
      "&client_secret=" + cliSec
    ).then(response => {
      return response.json()
    }).then(data => {
      res.json(data)
    }).catch(err => {
      res.json(err)
    });
  },
  getCheckinData: function () {
    fetch(
      "https://api.untappd.com/v4/checkin/view/" + checkinNum +
      "?client_id=" + cliID +
      "&client_secret=" + cliSec
    ).then(response => {
      return response.json()
    }).then(data => {
      res.json(data)
    }).catch(err => {
      res.json(err)
    });
  }
};
