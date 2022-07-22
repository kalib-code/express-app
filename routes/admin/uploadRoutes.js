/**
 * uploadRoutes.js
 * @description :: upload/download attachment routes
 */
  
const express = require('express');
const router = express.Router();
const fileUploadController = require('../../controller/admin/fileUploadController');
const auth = require('../../middleware/auth');
const { PLATFORM } =  require('../../constants/authConstant');

router.post('/admin/upload',auth(PLATFORM.ADMIN),fileUploadController.upload);

module.exports = router;