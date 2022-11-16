import knex from '../../../database/dbconfig'
import { Request, Response } from 'express'
import axios from 'axios'

interface Movie {
  id: string
  title: string
  original_title: string
  description: string
  release_date: string
  rt_score: string
}

interface Movies extends Array<Movie> {}

export class MoviesController {
  // GET
  async index (req: Request, res: Response) {
    const { offset = 1, limit = 10 } = req.query

    try {
      const movies = await knex('movies')
        .select(
          'id',
          'title',
          'original_title',
          'description',
          'score',
          'release_date')
        .orderBy('release_date', 'asc')
        .orderBy('title', 'asc')
        .offset((Number(offset) - 1) * Number(limit))
        .limit(Number(limit))

      const moviesTotal = await knex('movies')
        .select('id')

      return res.send({
        movies,
        total: moviesTotal.length
      })
    } catch (error) {
      return res.status(404).send({ error: 'Não encontrado' })
    }
  }

  async getByid (req: Request, res: Response) {
    const { id } = req.params
    try {
      const movie = await knex('movies')
        .select(
          'id',
          'title',
          'original_title',
          'description',
          'score',
          'release_date')
        .where({ id })
        .first()

      return res.send(movie)
    } catch (error) {
      return res.status(404).send({ error: 'Não encontrado' })
    }
  }

  // POST
  async fillMovies (req: Request, res: Response) {
    const teste: Movies = await axios.get('https://ghibliapi.herokuapp.com/films').then(
      response => response.data.map((movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        original_title: movie.original_title,
        description: movie.description,
        release_date: movie.release_date,
        score: movie.rt_score
      }))
    ).catch(
      await knex('movies').del()
    )

    await knex('movies').insert(teste)

    res.send(teste)
  }
  // PUT
  // DELETE
}
export default new MoviesController()
