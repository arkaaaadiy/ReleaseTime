export default class Event {
    constructor (
        title,
        category,
        date,
        description,
        complited = false,
        user = null,
        id = null
    ) {
        this.title = title ,
        this.category = category,
        this.date = String(date),
        this.description = description,
        this.complited = complited, 
        this.user = user,
        this.id = id
    }
}