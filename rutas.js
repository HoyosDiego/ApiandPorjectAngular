const { Router } = require('express');
const { route } = require('express/lib/application');

const router = require('express').Router()
const conexion = require('./config/conexion');

//asignacion de rutas
router.get('/', (req, res) => {
    let sql = "select * from movies ORDER BY movie_id DESC limit 500";
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            console.log("Ha ocurrido un error: " + err)
        }
        else {
            res.json(rows)
        }
    })
})

//get por id
router.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = "select * from movies  where  movie_id =?";

    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) {
            console.log("Ha ocurrido un error: " + err)
        }
        else {
            res.json(rows)
        }
    })
})

//agregar
router.post('/', (req, res) => {
    const { title, cast, crew } = req.body
    let sql = `insert into movies(title,cast,crew) values ('${title}','${cast}','${crew}')`;

    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            console.log("Ha ocurrido un error al insertar : " + err)
        }
        else {
            res.json({ status: 'Movie agregada: ' + sql })
        }
    })
})


//Eliminar
router.delete('/:id', (req, res) => {
    const { id } = req.params
    let sql = (`delete from movies where movie_id='${id}'`);
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            console.log("Ha ocurrido un error al Eliminar : " + err)
        }
        else {
            res.json({ status: 'Movie eliminada' })
        }
    })

})

//Modificar

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { title, cast, crew } = req.body
    
    let sql = (`update movies set
                title='${title}',
                cast='${cast}',
                crew='${crew}'
                where movie_id=${id}`)
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            console.log("Ha ocurrido un error al Modificar : " + err)
        }
        else {
            res.json({ status: 'Movie Modificada' })
        }
    })
})

module.exports = router;