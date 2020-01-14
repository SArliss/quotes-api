const { Router } = require('express');
// merge params gives us access to nested parameters
const quoteRouter = Router({ mergeParams: true });
const { Quote, Speaker } = require('../models.js');


// index
quoteRouter.get('/', async (req, res) => {
  const speakerId = req.params.speakerId;
  const quotes = await Quote.findAll({
    where: {
      speakerId
    }
  });
  res.json({ quotes });
})

// show --> will be http://localhost:300/speakers/:speakerId/quotes/:id
quoteRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const quote = await Quote.findByPk(id);
    res.json({ quote });
  } catch (e) {
    console.error(e.message);
    res.json(e.message)
  }
})

// create --> will be http://localhost:3000/speakers/:speakerId/quotes
quoteRouter.post('/', async (req, res) => {
  const speakerId = req.params.speakerId;
  const data = req.body;
  const speaker = await Speaker.findByPk(speakerId);
  const quote = await Quote.create(data);
  await quote.setSpeaker(speaker);
  res.json({ quote })
})

// update
quoteRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const quote = await Quote.findByPk(id);
  await quote.update(data);
  res.json({ quote });
})

// delete 
quoteRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const quote = await Quote.findByPk(id);
  await quote.destroy();
  res.json({ quote })
})

module.exports = quoteRouter; 
