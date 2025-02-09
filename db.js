// db.js
const postgres = require("postgres");

const sql = postgres(process.env.POSTGRES_URL, {
  ssl: {
    rejectUnauthorized: false,
  },
});

async function testConnection() {
  try {
    const result = await sql`SELECT 1+1 AS sum`;
    console.log("Connection test successful:", result);
  } catch (error) {
    console.error("Connection test failed:", error);
  } finally {
    await sql.end();
  }
}

testConnection();
