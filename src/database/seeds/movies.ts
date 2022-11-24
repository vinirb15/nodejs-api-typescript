import { Knex } from 'knex'
import MoviesModel from '../../api/models/MoviesModel'
export async function seed (_knex: Knex): Promise<void> {
  const externalMovies: any[] = await MoviesModel.getExternalMovies()
  await MoviesModel.fillMovies(externalMovies)
};
