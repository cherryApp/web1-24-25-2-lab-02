import { getAll, remove } from './db.js';

const table = document.querySelector('table.table');

const generateTable = (tableRows = []) => {
    console.log(tableRows);
};

getAll().then( data => generateTable(data) );

