import configureRouter from '../router/index.js';
import dbConnection from './db.js';
export default async ({app}) => {
   const connection = await dbConnection();
   configureRouter(app);

}