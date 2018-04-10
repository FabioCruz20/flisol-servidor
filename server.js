const express = require('express'); // importa módulo express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/project.js');
const cors = require('cors')

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-control-Allow-Methods", "DELETE, POST, PUT, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(router);

// se conecta ao MongoDB indicado na url
mongoose.connect('mongodb://localhost/interior_designs');
// obtém uma referência à conexão
const db = mongoose.connection;
// configura a Promise
db.Promise = global.Promise;
// configura manipuladores para os eventos de abertura e erro
db
.once('open', () => {
  console.log('Conectado ao servidor MongoDB.')
})
.on('error', () => {
  console.log('Error opening database.')
})

app.listen(3000, () => {
  console.log('App executando na porta 3000.')
});
