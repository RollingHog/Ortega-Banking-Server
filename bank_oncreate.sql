CREATE TABLE IF NOT EXISTS users(
  user_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ,
  nick TINYTEXT,
  full_name TINYTEXT,
  race TINYTEXT,
  guild INT,
  operator_id INT
);

CREATE TABLE IF NOT EXISTS accounts(
  acc_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ,
  acc_type INT,
  currency_type INT,
  currency_amount INT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE IF NOT EXISTS cards (
  card_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  card_type INT,
  acc_id INT,
  FOREIGN KEY (acc_id) REFERENCES accounts (acc_id)
);

CREATE TABLE IF NOT EXISTS transactions(
  transaction_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  from_acc INT,
  to_acc INT,
  currency_type INT,
  currency_amount INT
);

-- CREATE TRIGGER IF NOT EXISTS process_transaction AFTER INSERT ON transactions BEGIN
  -- UPDATE cards SET card_id = (SELECT MAX(card_id) FROM cards) + 1 WHERE card_id = NEW.card_id;
-- END;