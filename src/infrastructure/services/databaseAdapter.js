import { repositoryDatabase } from "../repository/database.js"


export const databaseManager = {
    saveOrder: async (data) => await repositoryDatabase.saveOrder(data),
    getOrders: () => repositoryDatabase.getOrders(),
    removeOrder: (id) => repositoryDatabase.remove(id)
}