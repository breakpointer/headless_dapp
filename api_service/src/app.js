const express = require('express')
const expressWinston = require('express-winston');
const winston = require('winston');
const app = express()

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

 app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    name: 'console.info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  }));

  app.use(router);

  app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  }));

module.exports = app