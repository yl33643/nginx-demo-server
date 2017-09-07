var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  const posts = [
    {
      id: 1,
      title: 'hello'
    },
    {
      id: 2,
      title: 'world'
    }
  ]
  res.send(JSON.stringify(posts));
});

router.get('/:id', function (req, res, next) {
  const post = {
    id: 1,
    title: 'hello'
  }
  res.send(JSON.stringify(post));
});

module.exports = router;
