

const promise = new Promise(function (resolve, reject) {
    if (Math.random > 0.5) {
        reject("Error");

    } 
    setTimeout(function () {
        resolve('done');
    }, 500);
});

promise
    .then(res => console.log(res))
    .catch(err => console.log(err))