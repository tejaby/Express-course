const mysql2 = require("mysql2/promise");

const connectDB = async () => {
  const connection = await mysql2.createConnection({
    host: "us-east.connect.psdb.cloud",
    user: "2wuwmtv0fj30uagc9h9l",
    password: "pscale_pw_NKa3YIStk4cmYyj4No0Xex3A1lQvE7YEZHFla74j48Z",
    database: "expressdb",
    // permitir conexion insegura xd
    ssl: { rejectUnauthorized: false },
  });

  const result = await connection.query("SELECT 1 + 1 AS Result");
  console.log(result);
};

module.exports = connectDB;
