import { Lucia } from 'lucia';
import adapter from 'lib/db/sqlite/adapter';

export const auth = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    }
  },
  getUserAttributes: (attributes) => ({
    username: attributes.username,
  })
});

declare module "lucia" {
	interface Register {
    Lucia: typeof auth;
    DatabaseUserAttributes: {
      username: string;
    };
	}
}
