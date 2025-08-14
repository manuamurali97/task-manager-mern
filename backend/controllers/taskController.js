const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const task = await Task.create({ user: req.user._id, title, description });
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = await Task.findOne({ _id: id, user: req.user._id });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (status !== undefined) task.status = status;
  await task.save();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id, user: req.user._id });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json({ message: 'Task deleted' });
};
