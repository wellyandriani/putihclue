const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/EventOrder')

/* POST Item . */
router.post('/event/order', OrderController.create)
/* GET Item Listing. */
router.get('/event/order', OrderController.getAll)
/* PUT Tenant Listing. */
// router.put('/tenant/:tenantId', TenantController.updateById)
/* GET/:id Tenant Listing. */
// router.get('/tenant/:tenantId', TenantController.getById)
/* Delete/:id Tenant Listing. */
// router.delete('/tenant/:tenantId', TenantController.deleteByid)

module.exports = router;
