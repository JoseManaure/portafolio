const mongoose = require('mongoose');
const {DB_USER, DB_PASSWORD, IP_SERVER, API_VERSION , DB_HOST} = require ("./constants");
const app = require('./app');


const PORT = process.env.PORT || 3978;

    async function connectToDatabase() {
        try {
          await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        app.listen(PORT, ()=> {
            console.log("##########################");
            console.log("###### API REST ########");
            console.log("##########################");
            console.log(` http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
        })
        } catch (error) {
          console.error('Error al conectar a MongoDB', error);
        }
      }
      
      connectToDatabase();