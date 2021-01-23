const fs = require('fs');
const readDir = fs.readdirSync('./lib/icons');
console.log(readDir);
const iconNames = readDir.map(item => {
  return item.split('.')[0];
});
console.log(iconNames);
console.log(JSON.stringify(iconNames));
