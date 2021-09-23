import mysql from 'mysql';

import keys from './keysUser';

const pool = mysql.createPool(keys.database)

pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.release();
    console.log('DB User is connected');
})

export default pool;