import express from 'express'
import controller from './MoviesController'

export default express
  .Router()
  // GET
  .get('/', controller.list)
  .get('/:id', controller.getByid)
  // POST
  // PUT
  // DELETE
