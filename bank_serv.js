//user_id nick full_name race guild operator_id
//card_id card_type acc_id
//acc_id acc_type user_id

const fs = require('fs');
//npm install sqlite3
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('banking.db');

try {
  const creationreqs = fs.readFileSync('bank_oncreate.sql', 'utf8')
    .replace(/\-\-.*(\r\n|$)/g, '')
    .replace(/\r\n\s+\r\n/g, '\r\n\r\n')
    .replace(/\r\n([^\r])/g, '$1')
    .split('\r\n');
  log(creationreqs)
    
  db.serialize( function() {
    for (i of creationreqs) {
      // log(i)
      (db.run(i))
    }
  })
} catch(e) {
  warn('db already exists or smth', e)
}

function log(...e) {
  console.log(...e)
}

function info(...e) {//34 - dark blue
  console.log("\x1b[36mInfo: \x1b[37m", ...e)
}

function warn(...e) {
  console.warn("\x1b[33mWarning:\x1b[37m", ...e)
}

function error(...e) {
  console.error("\x1b[31mError:\x1b[37m", ...e)
}