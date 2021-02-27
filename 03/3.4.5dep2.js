const dep1 = require('./3.1.5dep1');
console.log('require dep1', dep1);
module.exports = () =>{
    console.log('dep1', dep1);
}