// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const router = express.Router();
const timestamp_controller = require("./timestamp.controller");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(router);

router.get('/api/timestamp/:date_str?', timestamp_controller.timeStamp);

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = router;