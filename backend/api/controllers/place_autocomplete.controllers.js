const
    client = require('./../middleware/redis'),
    fetch = require('node-fetch')

exports.getMapsByCountryQuery = async (req, res) => {
    try {
        console.log('fetching data ...');
        const place = {
            query: req.params.query,
            country: req.params.country
        }
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place.query}&components=country:${place.country}&key=${process.env.API_KEY}`)
        const data = await response.json();


        // set data to redis

        client.setex(JSON.stringify(place), 300, JSON.stringify(data));
        res.status(200).json({
            data
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({
            error: err
        })
    }
}

exports.getMapByQuery = async (req, res) => {
    try {
        console.log('fetching data ...');
        const place = {
            query: req.params.query,
        }
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place.query}&key=${process.env.API_KEY}`)
        const data = await response.json();


        // set data to redis

        client.setex(JSON.stringify(place), 300, JSON.stringify(data));
        res.status(200).json({
            data
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({
            error: err
        })
    }
}
