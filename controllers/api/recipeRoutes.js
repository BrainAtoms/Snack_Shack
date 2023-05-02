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
router.post('/', async (req, res) => {
    try {
        const recipeData = await Recipe.create(req.body);
        res.status(200).json(recipeData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a recipe
router.put('/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id);
        if (!recipeData) {
            res.status(404).json({ message: 'A Recipe with that ID does not exist!' });
        }
        res.status(200).json(recipeData);
    } catch(err) {
        res.status(500).json(err);
    }
});
