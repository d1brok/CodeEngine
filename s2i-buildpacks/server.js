const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Code Engine update</title>
  </head>
  <body>
    I was built by Buildpacks with Code Engine and Michael!
  </body>
</html>`);
});

app.listen(port);
