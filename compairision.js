console.log(2 == 2); // true
console.log(2 == '2'); // true
console.log(1 == 2); // false
console.log(1<2); // false
console.log(1!=2); // true

console.log(null>0);
console.log(null<0);
console.log(null==0);

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);

// ===
console.log("2" === 2); // false

                                                  //DATA TYPES
// 1. Primitive Data Types

//1. String
let name = "India"; // String
console.log(name);


//2. Number
let age = 19; // Number
console.log(age);


//3. Boolean
let isAdult = true; // Boolean
console.log(isAdult);


//4. Undefined
let address; // Undefined (no value assigned)
console.log(address); 


//5. Null
let emptyValue = null; // Null (explicitly no value)
console.log(emptyValue); 


//6. Symbol (ES6)
let uniqueId = Symbol("123"); // Symbol (unique identifier)
console.log(uniqueId);


//7. BigInt (ES11)
let bigNumber = BigInt(123456789012345678901234567890); // BigInt (large integers)
console.log(bigNumber); 



// 2. Reference Data Types

//1. Objects
let person = { name: "John Doe", age: 30 }; // Object (key-value pairs)
console.log(person);


//2. Arrays
let numbers = [1, 2, 3, 4, 5]; // Array (ordered list of values)
console.log(numbers)


//3. Functions
function myfunction() {
    //console.log("Hello, World!"); 
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack

let Usernme = "Raj"; 
let Usernme2 = Usernme;
console.log(Usernme2); 

Usernme2 = "Ravi";
console.log(Usernme);
console.log(Usernme2);


//heap

let User = { name: "Raj", upiid: 1234567890 };

let User2 = User;

console.log(User2);

User2.name = "Ravi";

console.log(User2.name);

console.log(User.name);