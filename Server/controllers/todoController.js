const TodoSchema=require('../models/todo');


// Read


const getAllTodo= (req,res)=>{
    TodoSchema.find()
    .then((Data)=>{
        res.status(200).json(Data);
    })
    .catch((err) => {
        res.status(500).json({ message: 'Error fetching todos', error: err });
      });

};


// Create



const createTodo=(req, res) => {
const Data = new TodoSchema({
  name: req.body.name
});

Data.save()
  .then(() => res.status(201).send('Todo item saved successfully'))
  .catch((error) => res.status(400).send('Error saving todo item: ' + error));
};



//   Delete

const deleteTodo=(req,res)=>{

const todoId=req.params.id;


    TodoSchema.findByIdAndDelete(todoId)
    .then((deletetodo)=>{
        if(deletetodo){
        res.status(200).json({message:'todo item deleted',todo:deletetodo})
        }
        else{
            res.status(404).json({ message: 'Todo item not found' });
        }
    })
    .catch((err)=> res.status(500).json({ message: 'Error deleting todo item', error: err }));
    
};



// Update

const updateTodo=(req,res)=>{
const todoId=req.params.id;
const update=req.body;

TodoSchema.findByIdAndUpdate(todoId,update)
.then((updatetodo)=>{
    if(updatetodo){
        res.status(200).json({message:'todo item updated',todo:updatetodo})
    }
    else{
        res.status(404).json({ message: 'Todo item not found' });
    }
})
.catch((err)=> res.status(500).json({ message: 'Error deleting todo item', error: err }));
};

module.exports={createTodo,getAllTodo,deleteTodo,updateTodo};
