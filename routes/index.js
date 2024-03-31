const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenido a la API de unsplash'))

router.post('/photos', controllers.createPhoto);
router.get('/photos', controllers.getAllPhotos);

module.exports = router;

