/*  
Lab 2
Gavin Martin
CS 336, Calvin College
September 12, 2018
*/

// definition of person object
function Person(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    this.friends = [];
    this.greeting = 'Hello I am a.... Person.....';
}

//change name prototype 
Person.prototype.change_name = function (new_name) {
    this.name = new_name;
}

// prints the greeting 
Person.prototype.print_greeting = function () {
    console.log(this.greeting);
}

// gets the age 
Person.prototype.get_age = function () {
    var today = new Date();
    var birthDate = new Date(this.birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// adds a friend -- we all need them
Person.prototype.add_friend = function (person_object) {
    this.friends.push(person_object);
}

// three people 
var Gavin = new Person("Gavino", "1998-09-14");
var Adams = new Person('Adams', '1873-03-15'); //this is only a joke
var Jordan = new Person('Jordan', '1997-05-25');


Gavin.print_greeting();
console.log("Testing Ages \n");
console.log("Gavins Age " + Gavin.get_age());
console.log("Adams Age " + Adams.get_age());
console.log("Jordans Age" + Jordan.get_age());


Gavin.add_friend(Jordan);

// creates student object 
function Student(name, birthday, subject) {
    Person.call(this, name, birthday);
    this.subject = subject;
    this.greeting = "Hi, I'm a Student, I think...";
}

Student.prototype = Object.create(Person.prototype);

// returns the right information
var Gavin_the_student = new Student("Gavin", "1994-09-14", 'CS');
Gavin_the_student.add_friend(Jordan); // friends can be added for students 

console.log(Gavin_the_student.get_age()); // gets the age 
console.log(Gavin_the_student.greeting); // returns the right greeting

console.log(Gavin_the_student.name);

//changing name 
Gavin_the_student.change_name('Mateo');

// This confirms the name changer works 
console.log("Name change from Gavin to: " + Gavin_the_student.name);