const {Client} = require('pg');
const fs = require('fs');



async function createTables() {
    const dbClient = new Client({
        user: 'postgres',
        host: 'winhost',
        database: 'InvesCode',
        password: 'Hemant*',
        port: 5432
    });
    await dbClient.connect();
    console.log('Connected');
    try{
        let createUserTableQuery = fs.readFileSync('InitUsersTable.sql').toString();
        let result = await dbClient.query(createUserTableQuery);
        console.log("Users table created successfully.")
    } catch(err){
        console.log('failed to create users table');
        console.log(err.stack);
    }
    
    try{
        let createSchemesTableQuery = fs.readFileSync('InitSchemesTable.sql').toString();
        let result = await dbClient.query(createSchemesTableQuery);
        console.log('Schemes table created successfully.');
    } catch(err){
        console.log('failed to create schemes table');
        console.log(err.stack);
    }
    
    try{
        let createFolioTableQuery = fs.readFileSync('InitFolioTable.sql').toString();
        let result = await dbClient.query(createFolioTableQuery);
        console.log('Folio table created successfully.');
    } catch(err){
        console.log('failed to create folio table');
        console.log(err.stack);
    }
    
    try{
        let createPurchaseTableQuery = fs.readFileSync('InitPurchaseTable.sql').toString();
        let result = await dbClient.query(createPurchaseTableQuery)
        console.log('Purchase table created successfully.');
    } catch(err){
        console.log('failed to create purchase table');
        console.log(err.stack);
    }
    
    try{
        let createSellTableQuery = fs.readFileSync('InitSellTable.sql').toString();
        let result = await dbClient.query(createSellTableQuery);
        console.log('Sell table created successfully.');
    } catch(err){
        console.log('failed to create sell table');
        console.log(err.stack);
    }
    
    try{
        let createNAVTableQuery = fs.readFileSync('InitNAVTable.sql').toString();
        let result = await dbClient.query(createNAVTableQuery);
        console.log('NAV table created successfully.');
    } catch(err){
        console.log('failed to create nav table');
        console.log(err.stack);
    }
    await dbClient.end();
};

(async () => {
    await createTables();
})();