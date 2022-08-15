const express = require('express');
const router = express.Router();
const contributorsCtrl = require('../../controllers/contributors');

router.post('/', contributorsCtrl.create)
router.get('/allContributors', contributorsCtrl.index)
// router.post('/update/updateContributor', contributorsCtrl.update)


module.exports = router;



// below routes for POST requests

// app.use('/api/contributorSubmissions', require('./routes/api/contributorSubmissions.js'));

// // below routes for GET requests
// app.use('/api', require('./routes/api/contributorSubmissions.js'));
