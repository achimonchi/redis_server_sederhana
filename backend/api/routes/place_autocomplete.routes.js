const
    express = require('express');

const {
    cacheAutoComplete
} = require('./../middleware/cache')

const {
    getMapByQuery,
    getMapsByCountryQuery
} = require('./../controllers/place_autocomplete.controllers')

const router = express.Router();


router.get('/:country/:query', cacheAutoComplete, getMapsByCountryQuery);
router.get('/:query', cacheAutoComplete, getMapByQuery)

module.exports = router