// const doAsyncTask = () => Promise.resolve("1");
// (async function() {
//     let value = await doAsyncTask();
//     console.log(0);
//     console.log(value);
//     console.log("2"); //----> This waits before it's printed
// })();

const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = [__dirname+"/files/demofile.txt", __dirname+"/files/demofile.other.txt"];

(async () =>{
    let promises = files.map(name => readFile(name, { encoding: "utf8" }));

    let value = await Promise.all(promises);
        console.log(value);
})();
