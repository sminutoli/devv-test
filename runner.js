var express = require("express"),
  app = express(),
  bodyParser = require('body-parser'),
  hostname = process.env.HOSTNAME || '0.0.0.0',
  port = parseInt(process.env.PORT, 10) || 9001,
  publicDir = './';

app.get("/", function (req, res) {
  res.sendFile("/index.html", { root: publicDir } );
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('==============================\nDEVVIT serving on port %s\n==============================', port);