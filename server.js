const app = require('./app.js');
const db = require('./db/index.js');

const { PORT } = require('./config.js');
db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Listening on port: ' + PORT);
    });
  });
