import Bun from 'bun';
import { db } from 'lib/db';

export const createUserWithUsernameAndPassword = async (
  username: string,
  password: string,
) => {
  const hashedPassword = await Bun.password.hash(password);

  db
    .query('INSERT INTO user (username, password) VALUES ($username, $password)')
    .run({ $username: username, $password: hashedPassword });

  const validate = db
    .query('SELECT * FROM user WHERE rowId = last_insert_row_id()')
    .run()
  
  console.info(validate);

  return validate;
}

export const signInWithUsernameAndPassword = async (
  username: string,
  password: string,
) => {

}
