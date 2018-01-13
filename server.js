const express = require('express')
const app = express()


app.use(express.static("static"))
app.get('/*', (req, res, next) => {
  if (req.url === "/") next();
  var url = req.url.replace("/", "");
  var b64 = url.split("_&*..")[0];
  var origin = (new Buffer(b64, "base64")).toString("ascii");
  console.log(origin)
  res.redirect(origin)
})

app.listen(32149, () => console.log('Example app listening on port 32149!'))