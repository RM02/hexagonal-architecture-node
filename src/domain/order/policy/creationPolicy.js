/**
 * isRoleManager check if user as role manager for creation
 * @param { order } data object
 * @return { boolean } boolean
 */
const isRoleManager = (order) => {
    var allowed = false
    var role = "manager"
    if (order?.user?.role == role) {
        allowed = true
    }
    return allowed
}
/**
 * @param { order } data object
 * @return { boolean } boolean
 */
const isRequired = (order) => {
    var requiredKeys = ["id", "subject", "items", "user"]
    var objectKeys = Object.keys(order)
    var required = false
    if (objectKeys != requiredKeys) {
        required = true
    }
    return required
}

/**
 * OrderCreationPolicy function validates business rules
 * @param { data } object data 
 * @return { object } return rules object
 */

export const OrderCreationPolicy = (data) => {

    let Policy = {
        isRoleManager: isRoleManager(data),
        isRequired: isRequired(data)
    }
    return Policy
}