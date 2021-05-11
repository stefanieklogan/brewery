const Admin = require('../models/Admin.js');

const adminData = [
{
    "email": "flozito@gmail.com",
    "name": "Frank Lozito",
    "password": "BODYPUMP"
},
];

const seedAdmin = () => Admin.bulkCreate(adminData);

module.exports = seedAdmin;