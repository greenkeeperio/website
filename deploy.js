if (!process.env.GH_TOKEN) throw new Error('no token')

var url = require('url')
var path = require('path')

var pkg = require('./package.json')

var repo = url.parse(pkg.repository.url)
repo.auth = process.env.GH_TOKEN
repo = repo.format()

require('gh-pages').publish(path.join(__dirname, 'www'), {
  repo: repo,
  silent: true,
  user: {
    name: 'Greenkeeper',
    email: 'support@greenkeeper.io'

  }
}, console.log)
