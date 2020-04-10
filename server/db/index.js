const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  password: 'password',
  user: 'root',
  database: 'puppy-api',
  host: 'localhost',
  port: 3306
});

let pupDB = {};

pupDB.all = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM Puppers', (err, results) => {
      if(err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

pupDB.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM Puppers WHERE id = ?', [id], (err, results) => {
      if(err) {
        return reject(err);
      }
      return resolve(results[0]);
    });
  });
};

module.exports = pupDB;