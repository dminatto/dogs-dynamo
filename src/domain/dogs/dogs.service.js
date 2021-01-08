const dogsModel = require('./../../infra/models/dogs.model');
const DogsRepositoryClass = require('./../../infra/repository/dogs.repository')
const repository = new DogsRepositoryClass(dogsModel);
const { v4: uuidv4 } = require('uuid');

module.exports = class DogsService {
    
    async listDogs() {
        return await repository.getAll();
    }

    async detailDog(id){
        return await repository.getOne(id);
    }
    
    async createDog(body) {
        return await repository.create({
            id: uuidv4(),
            name: body.name,
            nickname: body.nickname
        })
    }

    async updateDog(id, body){
        return await repository.update(id, body);
    }

    async deleteDog(id){
        return await repository.delete(id);
    }
}
