const client = require('./redis')

exports.cacheAutoComplete = async (req, res, next) => {

    var place = {}

    if (req.params.country) {
        place = await {
            query: req.params.query,
            country: req.params.country
        }
    }
    else {
        place = await {
            query: req.params.query
        }
    }

    console.log(place)
    await get(place, res, next)

}

exports.cacheSearch = async (req, res, next) => {
    var place = await {
        location: req.params.location,
        radius: req.params.radius,
        type: req.params.type,
        keyword: req.params.keyword
    }

    await get(place, res, next)


}

const get = (place, res, next) => {
    client.get(JSON.stringify(place), (err, data) => {
        if (err) throw err;

        if (data !== null) {
            console.log('get from cache')
            res.status(200).json({
                data: JSON.parse(data)
            })
        }
        else {
            next();
        }
    })
}