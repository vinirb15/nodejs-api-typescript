import express from 'express'
import controller from './MoviesController'

export default express
  .Router()
// GET
  .get('/', controller.index)
  .get('/:id', controller.getByid)
  // POST
  .post('/', controller.fillMovies)
// PUT
// DELETE
