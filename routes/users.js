var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Heipähei');
});

router.get('/esim1', function(request,response) {
        response.send('tässä esimerkki get-metodista');
    }
);

router.get('/esim2/:name', function(request,response) {
  response.send('Terve ' +request.params.name +(' (tässä get-metodi parametrilla)'));
  }
);

router.get('/esim3/:etunimi/:sukunimi', function(request,response) {
  response.send('Terve ' +request.params.etunimi +" " +request.params.sukunimi +(' (tässä get-metodi kahdella parametrilla)'));
  }
);

router.post('/', function(request,response) {
  response.send(request.body.fname +' ' +request.body.lname)
  }
);

module.exports = router;
