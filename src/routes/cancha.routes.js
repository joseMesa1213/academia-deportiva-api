const router = require('express').Router()
const c = require('../controllers/cancha.controller')
const { canchaRules } = require('../middlewares/general.validators')
const validate = require('../middlewares/validate')

router.get('/', c.getCanchas)
router.get('/:id', c.getCanchaById)
router.post('/', canchaRules, validate, c.createCancha)
router.put('/:id', canchaRules, validate, c.updateCancha)
router.delete('/:id', c.deleteCancha)

module.exports = router