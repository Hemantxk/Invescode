const {Client} = require('pg');
const fs = require('fs');

const dbClient = new Client({
    user: 'postgres',
    host: 'winhost',
    database: 'InvesCode',
    password: 'Hemant*',
    port: 5432
});
dbClient.connect((err) => {
    if(err)
        console.log("failed connection to db- " + err);
    else
        console.log('connected to database successfully.');
});

exports.Client = dbClient;