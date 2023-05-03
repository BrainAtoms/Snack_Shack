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

  const recipes = await Recipe.bulkCreate(recipeData);

  process.exit(0);
};

seedDatabase();
