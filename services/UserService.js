
class UserService {
    constructor() {}
    getAll(){
        return [];
    }
    getOne(id){
        return {id}
    }
    add(data){
        return data
    }
    update(id, data){
        return {id, data}
    }
    remove(id){
        return {id}
    }   
}

module.exports = UserService