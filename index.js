var url = require('url')
var https = require('https')
var split = require('split')
var findId = /"waveform_url":".*\/(.*)_.*.png"/

module.exports = function scid (scurl, cb) {
  var opts = {
    path: url.parse(scurl).path,
    hostname: 'soundcloud.com',
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36'
    }
  }
  https.get(opts, function (res) {
    res.pipe(split()).on('data', function (line) {
      var res = line.match(findId)
      if (!res || !res[1]) return
      cb(null, res[1])
    })
  }).on('error', cb)
}
