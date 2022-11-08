/**
* @class Order class represents a business object
* @public
*/
export class Order {

    status = "In process";

    constructor (obj) {
        this.id = obj['id']
        this.subject = obj['subject']
        this.status = obj['status'] || this.status
        this.remark = obj['remark']
        this.items = obj['items']
        this.editedDate = obj['editedDate'] || new Date()
        this.user = obj['user']
        this.effectiveDate = new Date()
    }
}