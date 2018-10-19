/*function* generateSequence(){
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();*/
/*let one = generator.next();
//console.log(JSON.stringify(one));
console.log(one)

let two = generator.next();
console.log(JSON.stringify(two));
let three = generator.next();
console.log(three);
let four = generator.next();
console.log(four);*/

/*for(let value of generator){
    console.log(value);
};*/

/*----------------------------- */
/*
function* generateNumbers(start, end){
    for(let i = start; i<=end; i++){
        yield i;
    }
}

function* generateAlphaNum(){

    //0..9
    yield* generateSequence(48,57);

    //A..Z
    yield* generateSequence(65,90);

    //a..z
    yield* generateSequence(97,122);
}

let str = ''
for(let code of generateAlphaNum()){
    str += String.fromCharCode(code);
}

alert(str);

//let numbers = [...generateNumbers(2,5)];
//alert(numbers)
*/

function* gen(){
    let ask1 = yield "2+2?";
    alert(ask1);
    let ask2 = yield "3*3?"
    alert(ask2);
};

let generator = gen();
alert(generator.next().value);
alert(generator.next(4).value);
alert(generator.next(9).done);