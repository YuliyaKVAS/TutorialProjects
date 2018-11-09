//1 fonction context
//'use strict'
/*function foo(){
    var bar = 'bar2';
    console.log(this.bar);
};

var bar = 'bar1';
foo();*/

//2 object context

/*var o = {
    bar: "bar3",
    foo: function(){
        console.log(this.bar);
    }
}

var bar = 'bar1';
o.foo();*/

/*var o1 = {
    bar: 'bar5',
    foo: function(){
        console.log(this.bar);
    }
}

var o2 = {bar: 'bar2', foo: o1.foo};

var bar = 'bar3';
var foo = o1.foo;

o1.foo();
o2.foo();
foo();*/

/*var bar = 'global bar';
function daz(){
    var bar = 'local bar';
    function maz(){

        console.log(this.bar);
    }
    maz();
}
daz();*/

//obvious binding

/*function foo(){
    console.log(this.bar);
};

var o3 = {bar: 'bar3'};
var bar = 'bar1';
foo();
foo.apply(o3);
var func = foo.bind(o3);
func();*/

/*var school = {
    title: "Oxford",
    courses: ['JS', 'HTML', 'CSS'],
    printCourses: function(){
        var self = this;
        self.courses.forEach(function(course){
            console.log(self.title, course);
        })
    }
}

school.printCourses();*/

//arrow functions
var school = {
    title: "Oxford",
    courses: ["Math", "English", "Biology"],
    printCourses: function(){
        this.courses.forEach((course) => console.log(this.title, course));
    }
}

school.printCourses();

var university = {
    title: "SPBU",
    courses: ["Mechanics", "Matan", "Physics"],
   //printCourses: school.printCourses
}

//university.printCourses();
school.printCourses.apply(university);
