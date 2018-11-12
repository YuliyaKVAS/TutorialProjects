let myCar = new Object();
myCar.model = "Mustang";
myCar.year = "1969";
myCar.color = "red";

function showprops(obj, objName){
    var result = "";
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            result += objName + "." +i +" = " + obj[i] + "\n";
        }
    }

    return result;
}

console.log(showprops(myCar, "myCar"));

//constructor




////

function Person(age, name){
    this.age = age;
    this.name = name;
}

let person1 = new Person(21, "Ken")
console.log(person1 );

function Car(model, year, color, owner){
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner
}

let car1 = new Car("mustang", "1900", "green", person1);
console.log(car1)
console.log(car1.owner.name)

///Object.create

let Animal = {
    type: "Dog",
    displayType: function(){
        console.log(this.type)
    }
};

let animal1 = Object.create(Animal);
animal1.displayType();

let animal2 = Object.create(Animal);
animal2.type = "Fishes";
animal2.displayType()

// hasOwnProperty and in

let tree = {
    height: '100 m',
    color: "green"
}

console.log(tree.hasOwnProperty("color"))//true
console.log(tree.hasOwnProperty('toString'))//false

console.log('toString' in tree)// true
console.log('valueOf' in tree)// true
console.log('__proto__' in tree)//true
console.log('length' in Array.prototype)//true
console.log('sort' in Array.prototype)//tree
console.log(Array.prototype.hasOwnProperty('sort'))//true



