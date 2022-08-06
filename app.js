const db = require('./config/database');
const app = require('./config/express');
const host = process.env.HOST || '0.0.0.0';
const puerto = process.env.PORT || 3000;


db.sync().then(() => console.log('BD conectada')).catch((error)=> console.log(error));

app.listen(puerto, host, ()=> {
    console.log(`Applicacion corriendo en: ${host} por el puerto: ${puerto} `);
});