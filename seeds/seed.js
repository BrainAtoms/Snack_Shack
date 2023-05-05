const sequelize = require('../config/connection');
const { User } = require('../models');
const { Recipe } = require('../models');

const userData = require('./userSeedData.json');
const recipeData = require('./recipeSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
