import { format } from 'morgan';
import { query } from '../db/connectPostgres.js';

export const usersTable = "myClosetUsers"

export async function GET(req, res, next){
    try{
        let qs = `SELECT * FROM ${usersTable}`
        query(qs).then(data => res.json(data.rows))
    }catch (err) {
        next(err)
    }
}

export async function POST(req, res, err){
    try{
        
    }catch(err){
        next(err)
    }
}