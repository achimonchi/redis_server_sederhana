const
    express = require('express');

const {
    cacheSearch
} = require('./../middleware/cache')

const {
    getPlaceWithKeyword
} = require('./../controllers/place_search.controllers')

const router = express.Router();

router.get('/:location/:radius/:type/:keyword', cacheSearch, getPlaceWithKeyword)

module.exports = router;