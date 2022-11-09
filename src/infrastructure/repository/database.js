import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const saveOrder = async (data) => {

    const order = await prisma.order.create({
        data: {
            id: data.id,
            subject: data.subject,
            status: data.status,
            remark: data.remark,
            user: {
                connect: {
                    id: data.user.userId
                }
            },
            items: {
                create: data.items
            },
            editedDate: data.editedDate,
            effectiveDate: data.effectiveDate
        }
    })
    return order
}
const getOrders = async () => {
    const orders = await prisma.order.findMany({
        select:{
            id: true,
            userId: true,
            subject: true,
            items: {
                select: {
                    id: true,
                    name: true,
                    serie: true
                }
            }
        }
    })
    return orders
}
const remove = async (id) => {
    const deleteOrder = await prisma.order.delete({
        where: {
            id: id
        }
    })
    return deleteOrder
}
export const repositoryDatabase = {
    saveOrder,
    getOrders,
    remove
}