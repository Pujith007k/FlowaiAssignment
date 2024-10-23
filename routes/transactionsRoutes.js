const express = require('express');
const router = express.Router();
const { 
  createTransaction, getTransactions, getTransactionById,
  updateTransaction, deleteTransaction, getSummary
} = require('../controllers/transactionsController');

router.post('/', createTransaction);         // POST /transactions
router.get('/', getTransactions);            // GET /transactions
router.get('/:id', getTransactionById);      // GET /transactions/:id
router.put('/:id', updateTransaction);       // PUT /transactions/:id
router.delete('/:id', deleteTransaction);    // DELETE /transactions/:id
router.get('/summary', getSummary);          // GET /summary

module.exports = router;
