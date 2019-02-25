var express = require("express");
var http = require('http');
const os = require('os');

let app = express();
app.server = http.createServer(app);

// the hostname and port below will need to be changed to reflect the service
// https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/
var req_get = app.get('/', (req, res) => {
  console.log('Making v1 call');
  http.get('http://demoapp-server.default.svc.cluster.local:5000/api/v1/call', (resp) => {
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
        client: "client 1",
        message: data,
      })
      console.log("client v1 call completed");
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

