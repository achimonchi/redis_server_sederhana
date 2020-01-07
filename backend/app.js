// ===============================================================================
// ======================[REQUIRE MODULE]=========================================
const
    express = require('express'),
    bodyParser = require('body-parser'),
    env = require('dotenv'),
    cors = require('cors'),
    morgan = require('morgan')


const
    autocompleteRoutes = require('./api/routes/place_autocomplete.routes'),
    searchRoutes = require('./api/routes/place_search.routes')

// ===============================================================================
// ======================[USE MODULE]=============================================

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

env.config();


app.use('/autocomplete', autocompleteRoutes)
app.use('/search', searchRoutes)




module.exports = app;