require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

const app = express();

//config
app.set('port', port);

//admitir
app.use(express.json());


//rutas
app.use('/api', require('./rutas'))

//Iniciar express
app.listen(app.get('port'), (err) => {
    if (err) {
        console.log("Error al iniciar express: " + err)
    } else {
        console.log("servidor iniciado en el puerto : " + port)
    }
})

