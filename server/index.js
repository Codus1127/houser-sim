require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const ctrl = require('./controller/controller')
app.use(express.json());

app.get('/api/houses',ctrl.getAllHouses)
app.post('/api/houses',ctrl.addToHouses)
app.delete('/api/houses/:id',ctrl.deleteHouses)

//massive accessibility
massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} monkeys eating sushi`);
  });
});