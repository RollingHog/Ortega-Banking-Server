//user_id nick full_name race guild operator_id
//card_id card_type acc_id
//acc_id acc_type user_id

//npm install sqlite3
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('banking.db');

try {
  const creationreq = 
  "CREATE TABLE IF NOT EXISTS users ("
  + "user_id INT, "
  + "nick TINYTEXT, "
  + "full_name TINYTEXT, "
  + "race TINYTEXT, "
  + "guild INT, "
  + "operator_id INT "
  + ");"
  + "CREATE TABLE IF NOT EXISTS accounts ("
  + "acc_id INT, "
  + "acc_type INT, "
  + "user_id INT, "
  + ");"
  + "CREATE TABLE IF NOT EXISTS cards ("
  + "card_id INT, "
  + "card_type INT,"
  + "acc_id INT "
  + ");"
  db.run(creationreq);
} catch(e) {
  warn('db already exists or smth', e)
}
