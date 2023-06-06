import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ToDoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean,
    completedAt: Date,
});

const ToDo = model('ToDo', ToDoSchema);
export default ToDo;
