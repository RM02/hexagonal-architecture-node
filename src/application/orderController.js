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
     * @param { data } data object
     * @return { order } new order
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
        
        if (policy.isRequired) {
            return
        }
        const orderCreated = await databaseManager.saveOrder(order)
        return orderCreated
        
    }
    /**
     * @param {data} data object
     * @return data
     */
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
    /**
     * @param {id} order identificator
     * @return
     */
    removeOrder = async (id) => {
        if (!id) {
            return
        }

        const deletedOrder = await databaseManager.removeOrder(id)
        return deletedOrder
    }
    /**
     * 
     * @return order list
     */
    getOrders = async () => {
        const orders = await databaseManager.getOrders()
        return orders
    }
}