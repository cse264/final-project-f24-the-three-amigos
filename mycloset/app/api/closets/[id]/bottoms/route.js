import { query } from '../../../../db/connectPostgres.js';

export async function GET(req, { params }) {
  const { userId } = await params.id

  try {
    // Query to get a random bottom from the closetItems table for the given user
    const result = await query(`SELECT * FROM closetItems WHERE user_id = ${userId} AND item_type = 'Bottom' ORDER BY RANDOM() LIMIT 1`)

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ message: 'No bottoms found for this user' }), {
        status: 404,
      })
    } else{
        return new Response(JSON.stringify(result.rows[0]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        })
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    })
  }
}
