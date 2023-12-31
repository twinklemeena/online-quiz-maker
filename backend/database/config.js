const { Pool } = require('pg');
const queries = require('./queries');

const pool = new Pool({
  port: 5432,
  user: 'admin',
  host: 'dpg-cm0s59mn7f5s73duidc0-a.oregon-postgres.render.com',
  password: 'hxcD6pfTNjQiAznKzKqPjjhmyIJHM8gH',
  database: 'onlinequiz',
  ssl: { rejectUnauthorized: false }, // Disables certificate validation, use carefully in production
});

const db = "onlinequiz"

pool.connect((err, client, done) => {
  if (err) throw new Error(err);

  client.query(`CREATE DATABASE IF NOT EXISTS ${db}`, (err) => {
    console.log("Database Created");
    for (let i = 0; i < queries.length; i++) {
      createTable(queries[i], client);
    }
    done();
  });
});

function createTable(tableQuery, client) {
  client.query(tableQuery, (err) => {
    if (err) throw err;
    console.log('Table Created');
  });
}

module.exports = pool;
