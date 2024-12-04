import { query } from '../../db/connectPostgres.js';

export async function GET(req, { params }) {
  const { userId } = params;

  try {
    // Query to get all closet items for the given user
    const result = await query(
      `SELECT * FROM closet_items WHERE user_id = $1`,
      [userId]
    );

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ message: 'No items found for this user' }), {
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

export async function POST(req, { params }) {
    const { userId } = params;
  
    try {
      const body = await req.json();
      const { item_name, item_type, image, price } = body;
  
      // Check if required fields are provided
      if (!item_name || !item_type || !image || !price) {
        return new Response(
          JSON.stringify({ error: 'item_name, item_type, image, and price are required' }),
          { status: 400 }
        );
      }

      //Creating id
      let idQS = `SELECT MAX(item_id) FROM closet_items`
      const idResult = await query(idQS)
      const prevID = idResult.rows[0].max
  
      // Insert new item into closetItems table
      const result = await query(
        `INSERT INTO closet_items (user_id, item_id, item_name, item_type, image, price) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [userId, prevID+1, item_name, item_type, image, price]
      );
  
      return new Response(JSON.stringify(result.rows[0]), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
      });
    }
}
