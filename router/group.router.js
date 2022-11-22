const express = require('express');
const router = express.Router();
const groupController = require('../controller/group.controller')

router.get('/:id', groupController.getGroupById);
router.get('/', groupController.getAllGroups);
router.post('/', groupController.createGroup);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup)

module.exports = router;