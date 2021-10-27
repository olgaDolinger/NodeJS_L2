console.log('>>>>');
import fs from 'fs';
import csv from 'csvtojson';
/* 
const content = fs.readFileSync('./csv/ex1.xlsx', 'utf8');
console.log(content);
 */

csv()
    .fromFile('./csv/ex1.csv')
    .then((obj) => {
        console.log(obj);
        Object.values(obj).forEach(element => {
            fs.appendFileSync('new.txt',`\n${JSON.stringify(element)}`)
        });
        
    })

