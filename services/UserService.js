const User = require('./../models/user')

class UserService {
    constructor() { }
    async getAll() {
        const users = await User.find()
        return users
    }
    async getOne(id) {
        return await User.findById(id)
    }
    async add(data) {
        const user = new User()
        user.username = data.username
        user.email = data.email
        await user.save()

        return user
    }
    async update(id, data) {
        const user = await this.getOne(id)
        if (!user) return null

        user.username = data.username || user.username
        await user.save()
        return user
    }
    async remove(id) {
        const user = await this.getOne(id)
        if (!user) return null
        await user.remove()

        return id
    }
}

module.exports = UserService