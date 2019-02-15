var express = require("express");
var http = require('http');
const os = require('os');

let app = express();
app.server = http.createServer(app);

app.get('/', (req, res) => {
  console.log('Making v1 call');
  http.get('http://10.128.0.8/api/v1/call', (resp) => {
      let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(data);
      res.status(200).send({
        success: 'true',
	from: os.hostname(),
        message: data,
      })
      console.log("v1 call completed");
    });

}).on("error", (err) => {
  console.log("Error: " + err.message);
  res.status(500).send({
    error: err.message,
  })
});


});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

