/**
 * @param { order } data object
 * @return { boolean } boolean
 */
const isRequired = (order) => {
    var requiredKeys = ["id", "subject", "products", "user"]
    var objectKeys = Object.keys(order)
    var required = false
    if (objectKeys != requiredKeys) {
        required = true
    }
    return required
}

/**
 * OrderEditionPolicy function validates business rules
 * @param { data } object data 
 * @return { object } return rules object
 */

export const OrderEditionPolicy = (data) => {

    let Policy = {
        isRequired: isRequired(data)
    }
    return Policy
}