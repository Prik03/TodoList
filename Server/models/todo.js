const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    name:String
});

const TodoData=mongoose.model('Data',TodoSchema);

module.exports=TodoData