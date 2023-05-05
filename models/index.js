const User = require('./User');
const Recipe = require('./Recipe');
const Tag = require('./Tag'); 
const RecipeTag = require('./RecipeTag');

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Recipe, {
    foreignKey: 'user_id'
});

Tag.belongsToMany(Recipe, {
    through: RecipeTag,
    foreignKey: "tag_id"
});
  
module.exports = {
    User,
    Recipe,
    Tag,
    RecipeTag
}; 

