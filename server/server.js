var express = require("express");
var http = require('http');
const os = require('os');

let app = express();
app.server = http.createServer(app);

app.get('/api/v1/call', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'server completed v1 call from ' + os.hostname(),
  })
  console.log("v1 call");
});

app.get('/api/v2/call', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'server completed v2 call from ' + os.hostname(),
    server: 'server 2',
  })
  console.log("v2 call");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

