# TutorialProjects
//Objects
JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects. 
A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:

objectName.propertyName
JavaScript has a number of predefined objects. In addition, you can create your own objects. You can create an object using an object initializer. Alternatively, you can first create a constructor function and then instantiate an object invoking that function in conjunction with the new operator.

Using object initializersSection
In addition to creating objects using a constructor function, you can create objects using an object initializer. Using object initializers is sometimes referred to as creating objects with literal notation. "Object initializer" is consistent with the terminology used by C++.


Using a constructor functionSection
Alternatively, you can create an object with these two steps:

Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
Create an instance of the object with new.
To define an object type, create a function for the object type that specifies its name, properties, and methods. For example, suppose you want to create an object type for cars. You want this type of object to be called Car, and you want it to have properties for make, model, and year. To do this, you would write the following function:

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Notice the use of this to assign values to the object's properties based on the values passed to the function.

Now you can create an object called mycar as follows:

var mycar = new Car('Eagle', 'Talon TSi', 1993);

Using the Object.create methodSection
Objects can also be created using the Object.create() method. This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.

// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes

//hasOwnProperty
Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
Каждый объект, произошедший от Object, наследует метод hasOwnProperty. Этот метод может использоваться для определения того, содержит ли объект указанное свойство в качестве собственного свойства объекта; в отличие от оператора in, этот метод не проверяет существование свойств в цепочке прототипов объекта.

Object.create(null)
var data = Object.create(null);
data.text = "Привет";

alert(data.text); // Привет
alert(data.toString); // undefined
Объект, создаваемый при помощи Object.create(null) не имеет прототипа, а значит в нём нет лишних свойств. Для коллекции – как раз то, что надо.