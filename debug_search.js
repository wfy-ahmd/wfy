const fs = require('fs');
const path = require('path');

const searchString = 'No cookie auth credentials found';
const startDir = path.join(process.cwd(), 'node_modules');

function searchDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            searchDir(filePath);
        } else if (file.endsWith('.js') || file.endsWith('.mjs') || file.endsWith('.ts')) {
            try {
                const content = fs.readFileSync(filePath, 'utf8');
                if (content.includes(searchString)) {
                    console.log('Found in:', filePath);
                }
            } catch (e) {
                // ignore
            }
        }
    }
}

console.log('Searching...');
searchDir(startDir);
console.log('Done.');
