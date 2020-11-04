const path = require('path');
const string = __filename;

console.log('path.spe:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('-----------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('-----------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
    dir : 'C:\\jiwoong\\nodebook',
    name : 'path',
    ext : '.js',
}));
console.log('path.normalize():', path.normalize('C://jiwoong\\\\nodebook\\\path.js'));
console.log('-----------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('-----------------------------');
console.log('path.join():', path.relative('C:\\jiwoong\\nodebook\\path.js', 'C:\\'));
console.log('path.join():', path.join(__dirname, '..', '..', '/jiwoong', '.', '/nodebook'));
console.log('path.resolve():', path.resolve(__dirname, '..', 'jiwoong', '.', '/nodebook'));