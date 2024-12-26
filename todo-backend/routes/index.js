const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/redis', async (_req, res) => {
  const count = await redis.getAsync('added_todos') || 0
  console.log('count', count);
  if(!count) {
     res.send({added_todos: 0})
  }else {
    res.send({added_todos: Number(count)})
  }
});

module.exports = router;
/* mongodb and its authentication in docker needs to be running for this to work */