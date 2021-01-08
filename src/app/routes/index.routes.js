const routes = require('express').Router();

const DogsServiceClass = require('./../../domain/dogs/dogs.service')
const service = new DogsServiceClass();

routes.get('/', async(req, res)=>{
  const dogs = await service.listDogs();
  return res.json({dogs});
});

routes.get('/:id', async(req, res)=>{
  const dog = await service.detailDog(req.params.id);
  return res.json(dog);
});

routes.post('/', async(req, res)=>{
  const dog = await service.createDog(req.body)
  return res.json(dog);
});

routes.put('/:id', async(req, res)=>{
  const dog = await service.updateDog(req.params.id, req.body)
  return res.json(dog);
});

routes.delete('/:id', async(req, res)=>{
  await service.deleteDog(req.params.id)
  return res.json({msg: 'Deleted'});
});

module.exports = routes;