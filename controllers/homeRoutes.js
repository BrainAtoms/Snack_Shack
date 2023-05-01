const router = require('express').Router();
const { Recipe, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include: [
                {
                    model: User,
                    attributes: [username],
                },
            ],
        });
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

        res.render('homepage', {
            recipes,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err)
    }
})