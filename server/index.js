const express = require('express'),
      bodyParser = require('body-parser'),
      fs = require('fs'),
      app = express(),
      port = process.env.PORT || 8081;

app.use(bodyParser.json());

app.get('/api/images/:name', (req, res) => {
  fs.readdir('./public/images/' + req.params.name, (err, files) => {
    res.status(200).send(files)
  })
})

app.listen(port, () => console.log('listening on port ' + port))