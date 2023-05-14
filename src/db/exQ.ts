import neo4j from '@db/neo4j';
import type { Result } from 'neo4j-driver';

const executeQuery = async (query: string, params?: any, options?: any) => {
  const session = neo4j.session({ database: 'neo4j' });
  let result = null;
  let error = null;
  try {
    result = await session.run(query, params, options);
  } catch (err) {
    error = err;
  } finally {
    await session.close();
  }
  return { error, ...result } as const;
};

export default executeQuery;
