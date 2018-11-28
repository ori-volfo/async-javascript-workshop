const fs = require("fs");
const zlib = require("zlib");

function zlibPromise(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });

}

function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

readFile(__dirname+"/files/demofile.txt", "utf-8")
    .then(data => {console.log(data);return(zlibPromise(data));}).then(zipped => console.log(zipped)); // --> Load it then zip it and then print it to screen
