/*const done = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("yes");
    }, 2000);
});

done
    .then((value) => {
        console.log('done');
    })
    .catch((value) => {
        console.log('error');
    })
    .finally(() => {
        console.log('everytime')
    });*/

/*let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("result");
    }, 1000);
});

promise
    .then(
        result => {
            alert('fulfilled ' + result);
        },
        error => {
            alert('rejected ' + error);
        }
    );*/

/*promise with error*/

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject(new Error("time is over!"))
    }, 2000);
});

promise
        .then(
            result => {
                alert('fulfilled: ' + result);
            },
            error => {
                alert('rejected: ' + error.message);
            }
        );
        