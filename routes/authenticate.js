var express = require('express');
var router = express.Router();

/* GET authenticate listing. */
router.get('/', (req, res, next) => {
    res.json({error: 'invalid type of request.'});
});

router.post('/',  (req, res, next) => {
    //TODO
})

module.exports = router;
