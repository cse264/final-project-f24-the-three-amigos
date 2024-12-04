import { query } from '../../../db/connectPostgres.js';

export const usersTable = "my_closet_users"

export async function GET(req, { params }) {
    const  id  = params.id
  
    try {
      const result = await query(`SELECT * FROM ${usersTable} WHERE user_id = ${id}`)
  
      if (result.rows.length === 0) {
        return new Response(JSON.stringify({ error: 'User not found' }), {
          status: 404,
        })
      }
  
      return new Response(JSON.stringify(result.rows[0]), {
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
      const { username } = body
  
      if (!username) {
        return new Response(
          JSON.stringify({ error: 'Username required' }),
          { status: 400 }
        )
      } else {
        //Creating id
        let idQS = `SELECT MAX(user_id) FROM ${usersTable}`
        const idResult = await query(idQS)
        const prevID = idResult.rows[0].max

        //Adding user
        const result = await query(`INSERT INTO ${usersTable} (user_id, usernam) VALUES ($1, $2)`,[prevID+1, username])
    
        return new Response(JSON.stringify(result.rows[0]), {
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