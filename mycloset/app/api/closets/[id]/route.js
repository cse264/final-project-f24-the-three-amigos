import { query } from '../../../db/connectMySql.js';

export async function GET(req, { params }) {
  const val =  await params
  const id = val.id

  try {
    // Query to get all closet items for the given user
    const result = await query(
      `SELECT * FROM closet_items WHERE user_id = ${parseInt(id)}`);

    if (!result) {
      return new Response(JSON.stringify({ message: 'No items found for this user' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(result), {
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
    const val =  await params
    const id = val.id
  
    try {
      const body = await req.json()
      const item_name = body.item_name
      const item_type = body.item_type
      const image = body.image
      const price = body.price
  
      // Check if required fields are provided
      if (!item_name || !item_type || !image || !price) {
        return new Response(
          JSON.stringify({ error: 'item_name, item_type, image, and price are required' }),
          { status: 400 }
        );
      }

      //Creating id
      let idQS = `SELECT MAX(item_id) AS maxUser FROM closet_items`
      const idResult = await query(idQS)
      const newId = idResult[0].maxUser + 1
  
      // Insert new item into closetItems table
      const result = await query(
        `INSERT INTO closet_items (user_id, item_id, item_name, item_type, image, price) 
         VALUES (${parseInt(id)}, ${newId}, '${item_name}', '${item_type}', '${image}', ${price})`);
  
      return new Response(JSON.stringify(result.rows), {
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
