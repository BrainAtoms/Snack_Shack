const router = require('express').Router();
const { Recipe } = require('../../models');

// GET all recipes
router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll();
        res.status(200).json(recipeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one recipe
router.get('/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id);
        if (!recipeData) {
            res.status(404).json({ message: 'A Recipe with that ID does not exist!' });
            return;
        }
        res.status(200).json(recipeData)
    } catch(err) {
        res.status(500).json(err)
    }
});

// CREATE a new recipe
// CREATE a new recipe
router.post('/', async (req, res) => {
    try {
        const newRecipe = await Recipe.create({
            ...req.body,
            user_id: req.session.user_id,
          });
          console.log(newRecipe)
          res.status(200).json(newRecipe);
        } catch (err) {
          res.status(400).json(err);
        }
      });

// UPDATE a recipe
router.put('/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.update(req.body, {
            where: {
                id: req.params.id,
            },
            individualHooks: true
        });
        if (!recipeData) {
            res.status(404).json({ message: 'A Recipe with that ID does not exist!' });
        }
        res.status(200).json(recipeData);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
