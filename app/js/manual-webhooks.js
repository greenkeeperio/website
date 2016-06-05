var $ = require('jquery')
var qs = require('querystring')

var data = qs.parse(window.location.search.replace(/^\?/, ''))

if (data.slug && data.secret) {

  if (window.history.pushState) {
    var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname
    window.history.pushState({path:newurl}, '', newurl)
  }

  $(function () {
    $('#presetup').hide()

    var $setup = $('#setup')

    $setup.find('.slug').text(data.slug)
    $setup.find('.secret').text(data.secret)
    $('#settings-link').attr('href', 'https://github.com/' + data.slug + '/settings/hooks/new')

    $setup.show()
  })
}
