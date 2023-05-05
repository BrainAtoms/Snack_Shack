const User = require('./User');
const Recipe = require('./Recipe');
const Tag = require('./Tag'); 
const RecipeTag = require('./RecipeTag');
// import imagesTable from './imageModel.js';

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Tag.belongsToMany(Recipe, {
    through: RecipeTag,
    foreignKey: "tag_id"
});

// const db = {};

// (async () => {
//     await sequelize.showAllSchemas({ logging: false }).then(async (data) => {
//       if (!data.includes('imageSchema')) await sequelize.createSchema('imageSchema');
//     });
//   })();
  
//   db.sequelize = sequelize;
//   db.Sequelize = Sequelize;
  
//   db.images = imagesTable(sequelize, DataTypes);
  
// export default db;
  
module.exports = {
    User,
    Recipe,
    Tag,
    RecipeTag
}; 

