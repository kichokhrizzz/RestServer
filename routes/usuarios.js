const { Router } = require('express');
const { usuariosGet } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('');

router.post('');

router.delete('');

router.patch('');


module.exports = router;