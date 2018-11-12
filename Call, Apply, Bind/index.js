let context = {
    foo: "bar"
};

function returnFoo(){
    return this.foo;
}

console.log(returnFoo()); //undefined
// Но если мы свяжем эту функцию с контекстом

let bound = returnFoo.bind(context);
console.log(bound()) // bar
// Так работает Function.prototype.bind.
// Так как returnFoo — это функция, она наследует прототип Function.prototype
//

// Существует несколько способов связывания функции с контекстом
// Call и apply позволяют вам вызывать функцию с нужным контекстом
console.log(returnFoo.call(context));// bar
console.log(returnFoo.apply(context))// bar

// Так же можно вложить функцию в объект

context.returnFoo = returnFoo;
console.log(context.returnFoo()) // bar
// В Array.prototype есть  метод slice.
// При вызове на массиве он возвращает копию массива
// от начального индекса до конечного (исключительно)

console.log([1,2,3].slice(0,1));// [1]

// Мы берем slice и присваиваем его локальной переменной

let slice = Array.prototype.slice;

// slice теперь оторван от контекста. Из-за того, что Array.prototype.slice
// работает с данным ему контекстом «this», метод больше не работает
//console.log(slice(0, 1)); // => TypeError: can't convert undefined to object
//console.log(slice([1,2,3], 0, 1)); // => TypeError: ...
// Но мы можем использовать apply и call, они позволяют нам передавать нужный контекст
console.log(slice.call([1,2,3], 0,1)); //[1]
console.log(slice.apply([1,2,3], [0,1]));//[1]

// Немного надоедает использовать .call каждый раз. Может воспользоваться bind?
// привяжем функцию call к контексту slice. 

slice = Function.prototype.call.bind(Array.prototype.slice);

// Теперь slice использует первый аргумент в качестве контекста

console.log(slice([1,2,3], 0,1)) //[1]

// Давайте проделаем с самим bind то же,
// что мы делали со slice

let bind = Function.prototype.call.bind(Function.prototype.bind);
//оборачиваем call, возвращая функцию, которая принимает функцию и контекст
// и возвращает связанную с контекстом функцию.

// Вернемся к первоначальному примеру
// И кновому bind
let amazing = bind(returnFoo, context);
console.log(amazing()) //bar
