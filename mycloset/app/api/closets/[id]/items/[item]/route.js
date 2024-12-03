import { query } from '../../db/connectPostgres.js';

export async function GET(req, { params }) {
  const { userId } = params.id;
  const { itemId } = params.item;

  try {
    // Query to get all closet items for the given user
    const result = await query(
      `SELECT * FROM closetItems WHERE user_id = $1 AND item_id = $2`,
      [userId, itemId]
    );

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ message: 'Item not found for this user' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}