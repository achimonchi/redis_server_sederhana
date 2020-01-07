const
    client = require('./../middleware/redis'),
    fetch = require('node-fetch')

exports.getPlaceWithKeyword = async (req, res) => {
    try {
        console.log('fetching data ...');
        const place = {
            location: req.params.location,
            radius: req.params.radius,
            type: req.params.type,
            keyword: req.params.keyword
        }
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${place.location}&radius=${place.radius}&type=${place.type}&keyword=${place.keyword}&key=${process.env.API_KEY}`)
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