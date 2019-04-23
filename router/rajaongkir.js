const router = require('express').Router()

router.get('/' , (req,res) => {
    res.send('<h1> Selamat Datang di API Rajaongkir </h1>')
})


router.get('/province', (request,response)=>{
    var http = require("https");
    var options = {
    "method": "GET",
    "hostname": "api.rajaongkir.com",
    "port": null,
    "path": "/starter/province?id=",
    "headers": {
        "key": "7fb7484cf3c892ef094339739c535661"
    }
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data",(data) => {
        chunks.push(data);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        response.send(body.toString());
    });
    });

    req.end();
})

router.get('/kabupaten/:terserah', (request,response) => {
    var http = require("https");

    var options = {
    "method": "GET",
    "hostname": "api.rajaongkir.com",
    "port": null,
    "path": "/starter/city?id=&province=" + request.params.terserah,
    "headers": {
        "key": "7fb7484cf3c892ef094339739c535661"
    }
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        response.send(body.toString());
    });
    });

    req.end();
})

router.post('/cost' , (request,response) => {
    var qs = require("querystring");
    var http = require("https");
    
    var options = {
      "method": "POST",
      "hostname": "api.rajaongkir.com",
      "port": null,
      "path": "/starter/cost",
      "headers": {
        "key": "7fb7484cf3c892ef094339739c535661",
        "content-type": "application/x-www-form-urlencoded",
        "Content-Length": 50
      }
    };
    
    var req = http.request(options, function (res) {
      var chunks = [];
    
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", function () {
        var body = Buffer.concat(chunks);
        response.send(body.toString());
      });
    });
    
    req.write(qs.stringify({ origin: '501',
      destination: request.query.tujuan,
      weight: 1700,
      courier: request.query.kurir }));
    req.end();
})


module.exports = router