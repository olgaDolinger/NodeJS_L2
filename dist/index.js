"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('>>>>');
const fs_1 = __importDefault(require("fs"));
const csvtojson_1 = __importDefault(require("csvtojson"));
/*
const content = fs.readFileSync('./csv/ex1.xlsx', 'utf8');
console.log(content);
 */
(0, csvtojson_1.default)()
    .fromFile('./csv/ex1.csv')
    .then((obj) => {
    console.log(obj);
    Object.values(obj).forEach(element => {
        fs_1.default.appendFileSync('new.txt', `\n${JSON.stringify(element)}`);
    });
});
