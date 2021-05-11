const sequelize = require('../config/connection');

const seedFeedback = require('./feedbackData');
const seedAdmin = require('./adminData');
const seedUser = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED ----\n');

    await seedUser();
    console.log('\n-----USER SEEDED----\n');

    await seedAdmin();
    console.log('\n-----ADMIN SEEDED----\n');

    await seedFeedback();
    console.log('\n-----FEEDBACK SEEDED----\n');

    process.exit(0);
};

seedAll();

