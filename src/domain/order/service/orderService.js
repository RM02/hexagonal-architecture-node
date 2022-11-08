import { Order } from "../entity/order.js"
import { OrderCreationPolicy } from "../policy/creationPolicy.js"
import { OrderEditionPolicy } from "../policy/editionPolicy.js"

/**
 * OrderCreationManager
 * @prop { createOrder } Function
 * @prop { validateOrder } Function
 */
export const OrderCreationManager = {

    /**
     * @param { data } data
     * @return { Order } Order class
     */
    createOrder: async (data) => {
        var order = new Order(data)
        return order
    },
    /**
     * @param { data } data
     * @return { object } return validations object 
     */
    validateOrder: async (data) => {
        var validations = OrderCreationPolicy(data)
        return validations
    },
    /**
     * @param {data} data 
     * @return { object } return validations object 
     */
    validateEdition: async (data) => {
        var validations = OrderEditionPolicy(data)
        return validations
    }
}