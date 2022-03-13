const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);

app.get('/', function (req, res) {
    res.send({...req.ipInfo, userLocation:`https://www.google.com.br/maps/@${req.ipInfo.ll[0]},${req.ipInfo.ll[1]}z`});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
