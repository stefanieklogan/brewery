const { User } = require('../models/User.js');

const userData = [
{
    "email": "raquel@email.com",
    "firstName": "Raquel",
    "lastName": "Scofield"
},
{
    "email": "stefanie@email.com",
    "firstName": "Stefanie",
    "lastName": "Logan"
}
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;