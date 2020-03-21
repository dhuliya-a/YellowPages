const express = require('express');
const userController = require('../controllers/user_controller');
const router = express.Router();

//Create
router.get('/create_user',userController.addUser);
router.post('/create_user', userController.create);

//Read
router.get('/user/:id', userController.show);
router.get('/users', userController.index);


//Update
router.get('/edit_user',userController.edit);
router.post('/update_user/:id', userController.update);

//Delete
router.post('/delete_user/:id', userController.delete);


module.exports = router;