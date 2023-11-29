const mysql = require('mysql');
const conection = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_pass,
    database: process.env.DB_database
})

conection.connect((error) =>{
    if (error){console.error('Error' + error);
}
else{
    console.log('Sin error');
}
   
/* 
conection.connect((error) =>{
    if (error){
        console.error('Error' + error);
}
{
    console.log('No hay error');

*/

})

module.exports = conection;