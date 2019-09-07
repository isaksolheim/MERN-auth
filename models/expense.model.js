const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: String,
  price: Number,
  category: String
}, {
  timestamps: true,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;