import { query } from '../../../db/connectMysql.js';

export const usersTable = "my_closet_users"

export async function GET(_req, {params}) {
    const val =  await params
    const id = val.id

    try {
      const qs = `SELECT * FROM ${usersTable} WHERE user_id = ${parseInt(id)}`
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

export async function POST(req) {
    try {
      const body = await req.json()
      const username = body.username
      const user_type = body.user_type
  
      if (!username || user_type) {
        return new Response(
          JSON.stringify({ error: 'Username and type required' }),
          { status: 400 }
        )
      } else {
        //Creating id
        let idQS = `SELECT MAX(user_id) AS maxUser FROM ${usersTable}`
        const idResult = await query(idQS)
        const newId = idResult[0].maxUser + 1


        //Adding user
        const qs = `INSERT INTO ${usersTable} (user_id, username, user_type) VALUES (${newId}, '${username}', '${user_type}')`
        console.log(qs)
        const result = await query(qs)
    
        return new Response(JSON.stringify(result.rows), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        })
      }
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
      });
    }
  }