const router = require('express').Router();
const { Tag } = require('../../models');

// GET all tags
router.get('/', async (req, res) => {
    try {
        const tagData = await Tag.findAll();
        res.status(200).json(tagData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// GET one tag
router.get('/:id', async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id);
        if(!tagData) {
            res.status(404).json({ message: 'There is no Tag for that ID!' });
            return;
        }
        res.status(200).json(tagData);
    } catch(err) {
        res.status(500).json(err)
    }
});

// CREATE a tag
router.post('/', async (req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        res.status(200).json(tagData)
    } catch(err) {
        res.status(400).json(err)
    }
});

module.exports = router