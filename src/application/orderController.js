import { OrderCreationManager } from "../domain/order/service/orderService.js"
import { databaseManager } from "../infrastructure/services/databaseAdapter.js";
import uuid4 from "uuid4";

/**
 * @class OrderController
 * @public
 */
export class OrderController {

    constructor () {}
    /**
     * createOrder
     * @param { data } data
     * @return { order } object
     */
    
    createOrder = async (data) => {

        if (!data) {
            return
        }
        if (!data?.id) {
            data.id = uuid4()
        }

        let policy = await OrderCreationManager.validateOrder(data)
        let order = await OrderCreationManager.createOrder(data)
        
        if (!policy.isRoleManager && policy.isRequired) {
            // include policy
            return
        }
        const orderCreated = await databaseManager.saveOrder(order)
        return orderCreated
        
    }
    editOrder = async (data) => {

        if (!data) {
            return
        }

        var policy = await OrderCreationManager.validateEdition(data)
        if (!policy.isRequired) {
            return
        }
        // save data
        return data
        
    }
    removeOrder = async (id) => {
        if (!id) {
            return
        }

        const deletedOrder = await databaseManager.removeOrder(id)
        return deletedOrder
    }
    getOrders = async () => {
        const orders = await databaseManager.getOrders()
        return orders
    }
}