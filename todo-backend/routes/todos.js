const express = require('express');
const { Todo } = require('../mongo')
const { getAsync, setAsync } = require('../redis/index')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })

  const countToDo = await getAsync('added_todos')
  if(!countToDo){
    await setAsync('added_todos', 1)
  } else {
    
    await setAsync('added_todos', Number(countToDo) + 1)
  }
  
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  await res.send(req.todo).status(200);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const {id} = req.params;

  const todo = await Todo.findByIdAndUpdate(id, req.body, {new: true});

  res.send(todo).status(200);
});

router.use('/:id', findByIdMiddleware, singleRouter)



module.exports = router;
