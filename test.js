var test = require('tape')
var scid = require('./index.js')

test('go figure some ids', function (t) {
  t.plan(4)
  scid('https://soundcloud.com/ghostpoet/meltdown-squarepusher-vs', function (err, res) {
    t.error(err)
    t.equal('ceceisvyM5x4', res, 'Get scid from full url')
  })
  scid('/flyinglotus/flying-lotus-kingmidas-lost', function (err, res) {
    t.error(err)
    t.equal('kllR7tKcPnL3', res, 'Get scid from path')
  })
})
