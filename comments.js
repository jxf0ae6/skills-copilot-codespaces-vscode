// Create web server
// Created by: Jay
// Created on: 9/10/2020

const express = require('express');
const router = express.Router();
const { Comments } = require('../models/comments');

router.get('/', async (req, res) => {
    const comments = await Comments.find();
    res.send(comments);
});

router.get('/:id', async (req, res) => {
    const comment = await Comments.findById(req.params.id);
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});

router.post('/', async (req, res) => {
    let comment = new Comments({
        name: req.body.name,
        comment: req.body.comment,
        date: req.body.date
    });
    comment = await comment.save();
    res.send(comment);
});

router.put('/:id', async (req, res) => {
    const comment = await Comments.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        comment: req.body.comment,
        date: req.body.date
    }, {
        new: true
    });
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});

router.delete('/:id', async (req, res) => {
    const comment = await Comments.findByIdAndRemove(req.params.id);
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});

module.exports = router;
