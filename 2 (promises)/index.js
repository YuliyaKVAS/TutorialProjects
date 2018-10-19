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

    /*--------------------------------------------*/ 

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


/*------------------------------------------------*/

/*promise with error*/
/*
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
        */

/*--------------------------*/


/*function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};

delay(2000);*/

/*-----------------------------------*/
//begin of chain
let chain = Promise.resolve();
let urls = [
    'user.json',
    'guest.json'
  ];
let results = [];

urls.forEach(function(url){
    chain = chain
        .then(() => httpGet(url))
        .then((result) => {
            results.push(result);
        });
});

chain.then(() => {
    alert(results);
});



