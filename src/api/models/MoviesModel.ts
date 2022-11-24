import knex from '../../database/dbconfig'
import axios from 'axios'

interface Movie {
  id: string
  title: string
  original_title: string
  description: string
  release_date: string
  rt_score: string
}

export class MoviesModel {
  // GET
  async list (offset: number, limit: number) {
    try {
      const movies: Movie[] = await knex('movies')
        .select(
          'id',
          'title',
          'original_title',
          'description',
          'score',
          'release_date')
        .orderBy('release_date', 'asc')
        .orderBy('title', 'asc')
        .offset((offset - 1) * limit)
        .limit(limit)

      const moviesTotal: any = await knex('movies')
        .count('id')

      return {
        movies,
        total: Number(moviesTotal[0].count)
      }
    } catch (error) {
      console.log(error)
      return {
        movies: [],
        total: 0
      }
    }
  }

  async getByid (id: string) {
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

      return movie
    } catch (error) {
      return {}
    }
  }

  async getExternalMovies () {
    const movies: Movie[] = await axios({
      baseURL: 'https://ghibliapi.herokuapp.com/',
      url: '/films',
      responseType: 'json',
      method: 'get',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'accept-encoding': 'null'
      }
    }).then(res => {
      return res.data
    })
    return movies
  }

  // POST
  async fillMovies (externalMovies: any[]) {
    const movies: any[] = externalMovies.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      description: movie.description,
      release_date: movie.release_date,
      score: movie.rt_score
    }))

    await knex('movies').insert(movies)
    return movies
  }
  // PUT
  // DELETE
}
export default new MoviesModel()
