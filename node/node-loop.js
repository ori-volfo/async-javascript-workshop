console.log("start");
const interval = setInterval(() => {
    console.log("setInterval 1");
    Promise.resolve()
        .then(()=>{
            console.log('promise 1');
        })
        .then(()=>{
            console.log('promise 2');
            setImmediate(()=>{
                console.log('setImmediate 1');
                Promise.resolve()
                    .then(()=>{
                        console.log('promise 3');
                    })
                    .then(()=>{
                        console.log('promise 4');
                        clearInterval(interval);
                    });
            });
            process.nextTick(()=>{
                console.log('process nextTick');
            });

        });
}, 0);
console.log("end");