/*function foo(){
    return () => {
        console.log(this.a);
    };
}

const obj1 = {
    a:2
};

const obj2 = {
    a:3
};

const bar = foo.call(obj1);
bar.call(obj2);

console.log('-------------')

function fun(){
    setTimeout(() => {
        console.log(this.a);
    }, 2000);
}

//fun.call(obj1);

console.log(fun.prototype)

const newFoo = new fun();
console.log(Object.getPrototypeOf(newFoo))
*/

class Cat {
    constructor(name){
        //var self = this;
        this.name = name;
    }

    speak(){
        (this.name +'makes sound');
    }
}

class Lion extends Cat{
    speak(){
        super.speak();
        console.log(this.name + 'roars');
    }
}
const Kit = new Cat('Kitty');
Kit.speak();
const Leo = new Lion('Leo');
Leo.speak();

console.log('----------------------------------')
var a;

function foo() {
	a = 10 * 2;
	baz();
}

function bar() {
	a = 10 / 2;
	baz();	
}

function baz() {
	console.log( a );
}
foo();
bar();
//ajax( "http://some.url.1", foo );
//ajax( "http://some.url.2", bar );

// ????? 20 || 5
