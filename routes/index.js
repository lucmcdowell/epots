const express = require ('express');
const controller = require('../controllers/index');

const router = express.Router();

router.route('/api/v1/meetups')
  .post(controller.meetupCreate);


module.exports = router;