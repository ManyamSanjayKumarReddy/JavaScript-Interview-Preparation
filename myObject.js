// Defining an object using object literal notation
const person = {
    fristName: "pw",        // Correct the typo: change "fristName" to "firstName"
    lastName: "skills",
    
    // Defining a method within the object to get the full name
    getFullName: function() {
        return this.fristName + this.lastName;  // Correct the typo: change "fristName" to "firstName"
    }
}

// Creating a constructor function for the Person object
function Person(fristName, lastName) {  // Correct the typo: change "fristName" to "firstName"
    this.fristName = fristName;
    this.lastName = lastName;
    
    // Defining a method within the constructor function to get the full name
    this.getFullName = function() {
        return this.fristName + " " + this.lastName;
    }
}

// Creating instances of the Person object using the constructor
const person1 = new Person("pw", "skills");
const person2 = new Person("totelligence", "solutions");

// Logging the objects and their full names
console.log(person1);
console.log(person1.getFullName());
console.log(person2);
console.log(person2.getFullName());

// Accessing a property using square bracket notation
console.log(person1["fristName"]);  // Correct the typo: change "fristName" to "firstName"

// Getting an array of object property keys
console.log(Object.keys(person1));

// Getting an array of object property values
console.log(Object.values(person1));

// Extension: Adding a new property to the person1 object
person1.age = 30;

// Extension: Adding a new method to the Person prototype
Person.prototype.getFullNameWithAge = function() {
    return this.fristName + " " + this.lastName + " (" + this.age + " years old)";
}

// Logging the updated full name with age
console.log(person1.getFullNameWithAge());
