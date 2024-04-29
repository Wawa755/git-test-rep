console.log('hello');

let firstName = "Andrea";
let lastName = "Komazec";

let stringliteral = `Hello ${firstName} ${lastName}`;

console.log(stringliteral);

///////////////////////////////////////////////

let classNames1 = [
    "Andrea",
    "Luis",
    "Laura",
];

let classNames2 = [
    "Filip",
    "James",
    "Jha",
];

const classNames = classNames1.concat(classNames2);

//push is ussed to add stuff at the end
classNames.push("Martin");
console.log(classNames);

//unshift is ussed to add stuff at the begining
classNames.unshift("Bruh");
console.log(classNames);

let classNamesLenght = classNames.length;
console.log(classNames.length);

//always start counting from zero meaning it's always number of things +1 (npr. 6 things u count as 7 but if you want THE 6th thing it's 5)
console.log(classNames[1])
classNames[1] = "Maria";
console.log(classNames);

console.log( classNames[ classNames.length - 1] )

/////////////////
classNames.splice(-1)
console.log(classNames);

classNames.shift(1)
console.log(classNames);

/* classnames.string ???*/ console.log(classNames.join(' - '))

/*//////////////////26.2.24.//////////////////////*/

classNames.shift() //remove first item
classNames.pop() //remove last item

var removedPerson = classNames.shift //gives the removed variable a tag or whatever so u can use it for oter stuff

///////////////////////////////////find element in array/////////////////////////////
/*
const found = classNames1.find((element => element = "Laura"))
console.log(found)

classNames.splice(found)
console.log(classNames);
*/
//
let index = classNames.indexOf("Laura");
if (index !== -1) {
    console.log("Found 'Laura' at index", index);
}

//idk honesstly

let kickedOut = classNames.splice(0,1);

//////

// let kickedOut = []
//theres more

////////operators

let string1 = "this is a";
let string2 = "test";

let completeString = string1 + " " + string2
let number1 = 64;
let number2 = 32;

let sum = number1 + number2;

//
let subtract = number1 - number2

//
let division = number1 / number2

//
let multiplication = number1 * number2

/*odd or parni (even) broj we use %
3 % 2 = 1 (odd)
4 % 2 = 0 (even)

0 = false
1 = true
*/
var modulo = number1 % number2;
var isOdd = 7 % 2;

// equals == != (===)
var isEqual = number1 == number2;
let isNotEqual = number1 != number2;

let isEqualAndTypeChecked = 1 === true;
//results in false bc Idfk/


//if statements(?)

let number = 7;
let isEven = 7 % 2;
if (isEven)
{
    console.log( `The number ${number} is odd`);
}

////Combining conditions && and ...

if (isOdd && number > 3)
{
    console.log(`The number ${number} is odd and higher than 3`);
}
////


if ( isOdd || number < 3)
{
    console.log(`The number ${number} is odd and smaller than 3`);
}


//////exercise
/* WITH IF AND ELSE

let password = "idiot!1234bruh";
let passwordLength = password.length;
console.log(password.length);

if (password.length > 10 && password.includes('!' || '?')) {

    console.log(`The password ${password} meets the requirenments.`);
} else {
    console.log(`The password ${password} doesn't meet the requirenments.`);
}


*/

let password = "idiot!1234bruh";
let passwordLength = password.length > 10;
let containsExclamation = password.includes('!');
let containsQuestion = password.includes('?');
console.log(password.length);

/*
if (password.length < 10 && password.includes('!' || '?')) {

    console.log(`The password ${password} meets the requirenments.`);
} else {
    console.log(`The password ${password} doesn't meet the requirenments.`);
}
*/
if (!passwordLength && (!containsExclamation || !containsQuestion))
{
    Console.log(`The password (${password}) doesn't meet the requirements `);
}


