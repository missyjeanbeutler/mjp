const express = require('express'),
      bodyParser = require('body-parser'),
      fs = require('fs'),
      app = express(),
      port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/api/images/:name', (req, res) => {
  fs.readdir('./server/images/' + req.params.name, (err, files) => {
    res.status(200).send(files)
  })
})

app.listen(port, () => console.log('listening on port ' + port))