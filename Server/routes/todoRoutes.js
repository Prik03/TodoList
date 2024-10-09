const express=require('express');
const {createTodo,getAllTodo,deleteTodo,updateTodo}=require('../controllers/todoController')

const router=express.Router();

router.route('/').post(createTodo).get(getAllTodo);
router.route('/:id').put(updateTodo).delete(deleteTodo);

module.exports=router;
