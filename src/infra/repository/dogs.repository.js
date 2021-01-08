'use strict'

module.exports = class DogsRepository {
    _model

    constructor(model) {
        this._model = model;
    }

    async create(data) {
        const dog = new this._model(data);
        return await dog.save()
    }

    async update(id, data) {
        return await Dog.update(id, data);
    }

    async getAll() {
        return await this._model.scan().exec();
    }

    async getOne(id) {
        return await this._model.get(id);
    }

    async delete(id) {
        return await this._model.delete(id);
    }

}
