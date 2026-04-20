const router = require('express').Router()
const c = require('../controllers/entrenamiento.controller')
const { entrenamientoRules } = require('../middlewares/general.validators')
const validate = require('../middlewares/validate')

router.get('/', c.getEntrenamientos)
router.get('/:id', c.getEntrenamientoById)
router.post('/', entrenamientoRules, validate, c.createEntrenamiento)
router.put('/:id', entrenamientoRules, validate, c.updateEntrenamiento)
router.delete('/:id', c.deleteEntrenamiento)
router.post('/profesores', c.addProfesorToEntrenamiento)
router.delete('/profesores/:id', c.removeProfesorFromEntrenamiento)

module.exports = router