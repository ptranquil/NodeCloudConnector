const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', controller.getAllUsers);
router.post('/', controller.addUser);
router.delete('/:id', controller.deleteUser);
router.put('/:id', controller.updateUser);

module.exports = router;