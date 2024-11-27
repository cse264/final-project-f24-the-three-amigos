import { format } from 'morgan';
import { query } from '../db/connectPostgres.js';

export const closetTable = "closetTable"

export async function GET(req, res, next){
    try{
        const { id } = req.query.id
        
        let qs = `SELECT * FROM ${closetTable} WHERE userID = ${parseInt(id)}`
        query(qs).then((data) => {res.json(data.rows)})
    }catch(err){
        next(err)
    }
}