const fs = require("fs");

function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) reject(err); // pass values
            resolve(data); // pass values
        });
    });

}
readFile(__dirname+"/files/demofile.txt", "utf-8")
    .then(val => console.log(val), err => console.error(err));
