if (!process.env.GH_TOKEN) throw new Error('no token')

var repo = require('url').parse(require('./package.json').repository.url)
repo.auth = process.env.GH_TOKEN

require('gh-pages').publish(require('path').join(__dirname, 'www'), {
  branch: 'master',
  repo: repo.format(),
  silent: true,
  user: {
    name: 'Greenkeeper',
    email: 'support@greenkeeper.io'

  }
}, err => { if (err) throw err })
