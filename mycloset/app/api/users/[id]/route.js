import { query } from '../../db/connectPostgres.js';

export const usersTable = "myClosetUsers"

export async function GET(req, { params }) {
    const { id } = params;
  
    try {
      const result = await query(`SELECT * FROM ${usersTable} WHERE user_id = $1`, [id])
  
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
        const result = await query(`INSERT INTO ${usersTable} (username, user_id) VALUES ($1, $2)`,[username, prevID+1])
    
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