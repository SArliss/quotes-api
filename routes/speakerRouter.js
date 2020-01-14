const { Router } = require('express');
const speakerRouter = Router();
const { Speaker } = require('../models.js');

// index
speakerRouter.get('/', async (req, res) => {
  const speakers = await Speaker.findAll();
  res.json({ speakers });
})

// show
speakerRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  const speaker = await speaker.findByPk(id);
  res.json({ speaker });
})

// create 
speakerRouter.post('/', async (req, res) => {
  const data = req.body;
  const speaker = await Speaker.create(data);
  res.json({ speaker })
})

// update
speakerRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const speaker = await Speaker.findByPk(id);
  await speaker.update(data);
  res.json({ speaker })
})

// delete
speakerRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const speaker = await Speaker.findByPk(id);
  await speaker.destroy();
  res.json({ speaker })
})

module.exports = speakerRouter; 