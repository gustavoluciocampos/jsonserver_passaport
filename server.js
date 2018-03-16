var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("jwt-simple");
var auth = require("./routes/auth.js")();
var users = require("./service/user-service");
var cfg = require("./config.js");
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')

server.use(jsonServer.defaults());
server.use(auth.initialize());
server.use(bodyParser.json())

server.post("/auth/login", function(req, res) {
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
    var user = users().find(function(u) {
      return u.email === email && u.password === password;
    });
    if (user) {
      var payload = {id: user.id};
      var token = jwt.encode(payload, cfg.jwtSecret);
      res.json({token: token});
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

server.use(/^(?!\/auth).*$/, auth.authenticate(), (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({status, message})
    return
  }
  try {
     next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({status, message})
  }
})

server.use(router)

server.listen(3000, function() {
  console.log("APP listen 3000 port");
});