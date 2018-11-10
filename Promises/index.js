// промис, который находится в состоянии pending
//ожидание (pending): начальное состояние, не выполнено и не отклонено.
let promise = new Promise(() => console.log('I am created'));
promise.then(() => console.log('waiting'))
/// промис который после создания сразу переходит в состояние resolve

let promise_2 = new Promise((resolve) => resolve('Promise dadta'));
promise_2.then((value) => console.log(value))

///
let myPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Succes!!!")
    }, 2000);

    setTimeout(function(){
        reject("Sorry....")
    }, 3000);
});

myPromise
    .then(
        result => console.log('Ok' + result),
        error => console.log('No' + error)
);

/// промис после создания сразу переходит в rejected

let otherPromise = new Promise((reject) => {
        reject('Promise error')
    
})

otherPromise.then((value) => console.log(value));

///промис после создания переходит в rejected через 3 сек

let oneMorePromise = new Promise((reject) => {
    setTimeout(function(){
        reject('bhdff');
    }, 4000)
}) 

oneMorePromise.then((value) => console.log(value)) 
//
let pr = new Promise('I will reject');
