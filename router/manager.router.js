const express = require('express');
const router = express.Router();
const managerController = require('../controller/manager.controller')

router.get('/:id', managerController.getManagerById);
router.get('/', managerController.getAllManagers);
router.post('/', managerController.createManager);
router.put('/:id', managerController.updateManager);
router.delete('/:id', managerController.deleteManager)

module.exports = router;