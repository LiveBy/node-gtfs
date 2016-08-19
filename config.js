const local = require('./local.json')
const feeds = require('./feeds.json')
const agencies = local.concat(feeds)

if (!process.env.admindb) {
  throw new Error('$admindb is required')
}

const mongo_url = process.env.admindb.replace(
  '/admin',
  '/gtfs?authSource=admin'
)

module.exports = {
  mongo_url: mongo_url,
  agencies: agencies
}
