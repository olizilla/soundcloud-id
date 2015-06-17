# soundcloud-id

Guess a soundcloud id from it's page url.

Useful for grabbing a streamable mp3 url for a given page:

```js
var scid = require('scid')
scid('/flyinglotus/flying-lotus-kingmidas-lost', function (err, id) {
  console.log('http://media.soundcloud.com/stream/' + id + '.mp3')
})
```

http://media.soundcloud.com/stream/kllR7tKcPnL3.mp3

----

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)