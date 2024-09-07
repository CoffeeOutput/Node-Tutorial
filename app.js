const names = require('./first-module');
const choffle = require('./second-module');

console.log(names);

for(const key of Object.values(names)) {
    choffle(key);
}
