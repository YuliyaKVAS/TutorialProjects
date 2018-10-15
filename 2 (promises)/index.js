const done = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("yes");
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
    });