const express = require('express');
const router = express.Router();
const { createTask, getTask, updateTask, deleteTask} = require('../controllers/taskController');
const auth = require('../middleware/auth');

router.post('/', auth, createTask);
router.get('/', auth, getTask);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;