import { Request, Response } from 'express'
import MoviesModel from '../../models/MoviesModel'

interface Movie {
  id: string
  title: string
  original_title: string
  description: string
  release_date: string
  rt_score: string
}

interface MoviesList {
  movies: Movie[]
  total: Number
}

export class MoviesController {
  // GET
  async list (req: Request, res: Response) {
    const { offset = 1, limit = 10 } = req.query
    try {
      const movies: MoviesList = await MoviesModel.list(Number(offset), Number(limit))
      return res.send(movies)
    } catch (error) {
      return res.status(404).send(error)
    }
  }

  async getByid (req: Request, res: Response) {
    const { id } = req.params
    try {
      const movie: Movie = await MoviesModel.getByid(id)

      return res.send(movie)
    } catch (error) {
      return res.status(404).send({ error: 'Não encontrado' })
    }
  }

  // POST
  // PUT
  // DELETE
}
export default new MoviesController()
