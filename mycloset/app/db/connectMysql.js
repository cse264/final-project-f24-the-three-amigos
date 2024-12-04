import mysql from 'mysql2';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DBNAME,
  port: process.env.MYSQL_PORT,
});

// Test the connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

export const query = (sql, params) => {
  return new Promise((resolve, reject) => {
    connection.execute(sql, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Close the connection when finished
export const closeConnection = () => {
  connection.end((err) => {
    if (err) {
      console.error('Error closing the connection:', err.stack);
    } else {
      console.log('MySQL connection closed');
    }
  });
};
