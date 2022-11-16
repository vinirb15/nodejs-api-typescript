import { Knex } from 'knex'
import axios from 'axios'
export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('movies').del()

  // Inserts seed entries
  await axios.post('http://localhost:5000/api/v1/movies')
};
