import neo4j from 'neo4j-driver';

const db = neo4j.driver(
  import.meta.env.DB_URI,
  neo4j.auth.basic(import.meta.env.DB_USERNAME, import.meta.env.DB_PASSWORD)
);

export default db;


