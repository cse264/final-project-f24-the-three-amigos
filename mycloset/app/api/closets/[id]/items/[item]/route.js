import { query } from '../../../../../db/connectMySql.js';

export async function GET(req, { params }) {
  const val =  await params
  const userId = val.id
  const itemId = val.item


  try {
    // Query to get a random top from the closetItems table for the given user
    const result = await query(`SELECT * FROM closet_items WHERE user_id = ${parseInt(userId)} AND item_id = ${parseInt(itemId)}`)

    if (!result) {
      return new Response(JSON.stringify({ message: 'No tops found for this user' }), {
        status: 404,
      })
    } else {
        return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        })
    }
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    })
  }
}