const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenido a la API de unsplash'))

router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);

module.exports = router;
