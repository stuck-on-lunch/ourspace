import { BunSQLiteAdapter } from '@lucia-auth/adapter-sqlite';
import db from '.';

const adapter = new BunSQLiteAdapter(db, {
  user: 'user',
  session: 'session',
});

export default adapter;
