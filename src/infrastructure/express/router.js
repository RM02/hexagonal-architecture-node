import express from 'express';
import { orderAdapter } from '../services/orderAdapter.js';

const router = express()

router.post('/api/management/order', async (req, res) => {
    const order = await orderAdapter.creation(req.body)
    if (order) {
        res.status(200)
        res.json(order);
    }
    res.status(400).end();
})
router.put('/api/management/order', async (req, res) => {
    const order = await orderAdapter.edition(req.body)
    if (order) {
        return res.status(200).end();
    }
    return res.status(400).end();
})
router.get('/api/management/order', async (req, res) => {
    const orders = await orderAdapter.getOrders()
    if (orders) {
        return res.json(orders)
    }
    return res.status(201).end()
})
router.delete('/api/management/order/:id', async (req, res) => {
    const deleteOrder = orderAdapter.deleteOrder(req.params.id)
    return res.status(200).end()
})
export const routes = router