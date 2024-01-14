const express = require('express');
const { adminControllers } = require('../controllers');
const { authentication, isAdmin, EH } = require('../middlewares');


const router = express.Router(); // /api/admin

router.route('/allUsers')
    .get(
        authentication,
        isAdmin,
        EH.asyncErrorHandler(adminControllers.allUsers)
    )

module.exports = router;