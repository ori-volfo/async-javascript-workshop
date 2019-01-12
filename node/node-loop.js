console.log("start");
const interval = setInterval(() => {
    console.log("setInterval 1");
    Promise.resolve()
        .then(()=>{
            console.log('promise 1');
        })
        .then(()=>{
            console.log('promise 2');
            clearInterval(interval);
        });
}, 0);
console.log("end");