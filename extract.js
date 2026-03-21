const fs = require('fs');

const content = fs.readFileSync('main.js', 'utf-8');
const strings = [...content.matchAll(/"([^"\\]*(\\.[^"\\]*)*)"/g)].map(m => m[1]);

// Filter out generic paths, CSS classes, standard keys, or very short strings
const validStrings = strings.filter(s => {
    if (s.length < 5) return false;
    if (s.startsWith('/static/')) return false;
    if (s.startsWith('http://') || s.startsWith('https://')) return false;
    if (s.match(/^[a-z0-9A-Z_#-]+$/)) return false; // CSS classes / hex
    if (s.includes('px') || s.includes('rem') || s.includes('em') || s.includes('%')) return false;
    return true;
});

// Write to a temporary file
fs.writeFileSync('extracted_copy.txt', [...new Set(validStrings)].join('\n'));
console.log('Extracted ' + validStrings.length + ' strings');
