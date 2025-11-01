const fs = require('fs');

let content = fs.readFileSync('src/components/Section3.js', 'utf8');

content = content.replace(/FaCheckCircle/g, 'FaCheck');
content = content.replace(/FaAward/g, 'FaTrophy');

fs.writeFileSync('src/components/Section3.js', content);

console.log('Fixed all icons');