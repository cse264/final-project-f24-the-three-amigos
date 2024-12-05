import { query } from '../../db/connectMysql.js';

export const usersTable = "my_closet_users"

export async function GET(_req, {params}) {
    const val =  await params
    const id = val.username

    try {
      const qs = `SELECT user_id FROM ${usersTable} WHERE username = '${id}'`
      console.log(qs)
      const result = await query(qs)
  
      if (!result) {
        return new Response(JSON.stringify({ error: 'User not found' }), {
          status: 404,
        })
      }
  
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
      })
    }
  }
