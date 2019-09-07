const router = require('express').Router();
let Expense = require('../models/expense.model');

router.route('/').get((req, res) => {
  Expense.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const category = req.body.category;

  const newExpense = new Expense({
    name,
    price,
    category
  });

  newExpense.save()
    .then(() => res.json('Expense added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;