
// importa o módulo express para obter uma
// instância do Router
const express = require('express');
const controllers = require('../controllers/project.js');

const router = express.Router();

// usa o router para definir os métodos disponíveis
// cada rota
router.route('/')
.get(controllers.getProjects)

router.route('/:id')
.get(controllers.getProject)

router.route('/create')
.post(controllers.createProject)

router.route('/update')
.put(controllers.updateProject)


router.route('/delete/:_id')
.delete(controllers.deleteProject)

// quando usarmos o require() em outro arquivo,
// estaremos importando o objeto router configurado.
module.exports = router;
