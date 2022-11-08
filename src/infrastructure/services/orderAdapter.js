import { OrderController } from "../../application/orderController.js"

const orderController = new OrderController()

export const orderAdapter = {

    creation: async (data) => {
        const order = await orderController.createOrder(data)
        return order
    },
    edition: (data) => {
        const order = orderController.editOrder(data)
        return order
    },
    getOrders: () => {
        const orders = orderController.getOrders()
        return orders
    },
    deleteOrder: (id) => {
        const order = orderController.removeOrder(id)
    }
}
