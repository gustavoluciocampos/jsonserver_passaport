const fs = require('fs');

module.exports = function() {
    const db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'))
    return db.users;
}