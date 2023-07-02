const express = require('express');
const catController = require('../controllers/catController');
const router = express.Router();

router
  .route('/')
  .get(catController.getAllCats)

router
  .route('/upload')
  .get(catController.uploadPage)
  .post(catController.upload.single('image'), catController.createCat);

router
  .route('/edit/:id')
  .get(catController.editPage)
  .post(catController.updateCat);

router
  .route('/delete/:id')
  .post(catController.deleteCat);

module.exports = router;