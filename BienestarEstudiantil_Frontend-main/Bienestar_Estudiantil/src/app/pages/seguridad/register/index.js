const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const saltRounds = 10;

router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        // Guardar el nombre de usuario y hashedPassword en la base de datos.
        // ...

        res.status(201).send('Usuario registrado con éxito');
    } catch (err) {
        res.status(500).send('Error al registrar el usuario');
    }
});

module.exports = router;
