const router = require('express').Router();
const restaurantController = require('../controllers/restaurantController')
const {verifyAndAuthorisation, verifyVendor} = require('../middleware/verifyToken')


router.post('/', verifyAndAuthorisation, restaurantController.addRestaurant)

router.get('/byId/:id', restaurantController.getRestaurant)

router.get('/:code', restaurantController.getRandomRestaurants)

router.delete('/:id',verifyVendor,  restaurantController.deleteRestaurant)

router.patch('/:id',verifyVendor, restaurantController.serviceAvailability)

module.exports = router;