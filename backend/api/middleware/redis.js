const redis = require('redis');

const _redisPort = process.env.PORT || 6379;

const client = redis.createClient(_redisPort)

module.exports = client;