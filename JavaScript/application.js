'use strict';

const db = require('./db.js');

const pg = db.open({
    host: '127.0.0.1',
    port: 5432,
    database: 'application',
    user: 'therealtoresto',
    password: 'therealtoresto',
});

console.dir({ pg });

pg.select('pg_tables')
    .where({ tableowner: 'therealtoresto', schemaname: 'public' })
    .fields(['schemaname', 'tablename', 'tableowner'])
    .then(rows => {
        console.table(rows);
        pg.close();
    });