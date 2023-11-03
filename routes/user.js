const router = require('express').Router();
const userController = require('../controllers/userController')

const {verifyAndAuthorisation} = require('../middleware/verifyToken')

router.get('/', verifyAndAuthorisation, userController.getUser)

router.delete('/', verifyAndAuthorisation,  userController.deleteUser)

router.put('/', verifyAndAuthorisation, userController.updateUser)

module.exports = router;