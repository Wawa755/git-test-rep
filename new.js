
// 04.03.24.

var numberToCheck
if (numberToCheck > 11)
{
console.log(`${numberToCheck} is bigger than 11`)
}

///////////////////////////

let gender = "x"
if (gender == "m")
{
    console.log("This conditionr esolves to m")
}
else if(gender == "f")
{
    console.log("This conditionr esolves to f")
}
else{
    console.log("This person hasn't shared their gender")
}

//if is most likely condition, else if is another if basically (so 2 conditions) and just else is everything else

//SWITCH:
let gender2 = "m";
switch(gender2)
{
    case "m":
        console.log("(switch: ) This person is m");
        break;

        case "f":
        console.log("(switch: ) This person is f");
        break;

        case "x":
        console.log("(switch: ) This person is x");
        break;

        default:
        console.log("(switch: ) This person hasn't put in their gender");
}


//if else SHORTHAND
/*var nbOfReservations = 2
if
var reservationString = `There are ${nbOfReservations} reservations left`

//he put in console:  true ? console.log("resolves to true") : console.log("resolves to false")

*/

//EXERCISE

/*
var numberex
console.log(`${numberex}`)
for (0 < numberex < 100)
{
if(numberex % 3 == 0)
{
    console.log("Fizz")
}

else if(numberex % 5 == 0)
{
    console.log("Buzz")
}

else(numberex % 3 && numberex % 5 == 0)
{
    console.log("FizzBuzz")
}
}
*/

let numberex = 3
console.log(`${numberex}`)

if(numberex % 3 && numberex % 5 == 0)
{
    console.log("FizzBuzz")
}

else if(numberex % 3 == 0)
{
    console.log("Fizz")
}

else if(numberex % 5 == 0)
{
    console.log("Buzz")
}

else{
    console.log(numberex)
}

///////////////////////////////////

//MATH FLOOR LOOK AT//

//FOR LOOP; increment ++

for( let number = 0; number < 10; ++number)
{
    console.log(number);
}

//NESTED LOOPS, nesting If conditions is bad practice but you can nest For loops

for( let table = 1; table < 10; ++table)
{
    console.log(`the table of ${table}`);

    for(let multiplication = 1; multiplication < 10; ++multiplication)
    {
        console.log(table * multiplication);
    }
}


//EXERCISE2
let classNames3 = [
    "Andrea",
    "Luis",
    "Laura",
];
for( let table2 = 1; table2 <= 10; ++table2)
{
    console.log(`the table of ${table2}`);

    for(let multiplication = 1; multiplication < 10; ++multiplication)
    {
        console.log(table2 * multiplication);
    }
}


//console.log(classNames.join(' - '))

// Outer loop for tables from 1 to 9
for (let table = 1; table <= 9; table++) {
    // Create an empty array to store the multiplications for the current table
    let multiplications = [];
    
    // Inner loop for multiplications from 1 to 9
    for (let multiplier = 1; multiplier <= 9; multiplier++) {
        // Calculate the multiplication and push it to the array
        let result = table * multiplier;
        multiplications.push(result);
    }
    
    // Print the formatted table
    console.log(`the table of ${table}: ${multiplications.join(' - ')}`);
}

//11.3.2024.

function printStudents() {
    console.log("Students:");
    classObject.students.forEach(student => {
        console.log(student);
    })
}

var classObject = {
    teacher: "Pascal",
    students: ["Andrea", "Petra", "Laura", "Martin"],
    beamer: true,
    studentPrintout: function() {
        console.log("Students:");
        this.students.forEach(student => {
            console.log(student)
        })
    }

}


for (var key in classObject)
{
    console.log(`key: ${key}, value: ${classObject[key]}`);
}


//18.03.2024

// Exercise
// Create an object called mathHelper. Add four properties to this object 
// - multiplicate
// - divide
// - isEven
// - printOut
// The functionality is exactly the same as the 

let mathHelper = {
    counter: 0,
    multiplicate: function(number1, number2) {
        ++this.counter
        return number1 * number2;
    },
    divide: function(number1, number2) {
        ++this.counter
        return number1 / number2;
    },
    isEven: function(number1) {
        ++this.counter
        return (number1 % 2) ? false : true;
    },
    printOut: function (number1, number2)
    {
        //++this.counter
        console.log( `object: multiplication: ${ this.multiplicate(number1, number2)}` );
        console.log( `object: division: ${ this.divide(number1, number2)}` ); 
        console.log( `object: isEven: ${ this.isEven(number1)}` );
    },
    
};

mathHelper.printOut(39, 49);

//THERES A COUPLE OF MORE ROWS SO CHECK IT OUT

//////////////////////////////////////////////////////////////////////////

//25.3.2024.

// Exercise
// Create an array called llmModels, this array contains objects with the following properties: name & website. Add at least 3 models (ie. chatGpt, Midjourney, Gemini)
// In your HTML, create an element that will be the container that will be the placeholder of the HTML we are going to print out.
// Using JavaScript, add a <ul></ul> element to the innerHTML of the container
// Loop over the values of the llmModels array. Every value should be a list item (ie. <li>) and every value should be a link that shows the name of the LLM linking to the website (ie. <a href="url">llm name</a>) 
// Make sure your HTML is valid (ie. the closing </ul> tag should come after the looping of the values, all <li>-items have a closing </li>-tag in the appropiate place)

/*
let llmModels = [

    {name: "Chatgpt", website: "https://chat.openai.com"},
    {name: "Midjourney", website: "https://midjourney.com"},
    {name: "Gemini", website: "https://gemini.com"}
];

let container = document.getElementById('container')

let tempHTML =  '<ul>';
tempHTML += '<li>first list item</li>';
tempHTML += '<li>second list item</li>';
tempHTML += '</ul>';

container = tempHTML
*/

// Create the array of LLM objects
 
window.onload = function() {
    // Exercise 1: LLM List
    const llModels = [
      { name: "ChatGPT", website: "https://openai.com/blog/chatgpt" },
      { name: "Midjourney", website: "https://www.midjourney.com/" },
      { name: "Gemini", website: "https://blog.google/technology/ai/google-gemini-ai/" },
    ];
  
    const container = document.getElementById("llm-container");
    const ul = document.createElement("ul");
  
    llModels.forEach((model) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = model.website;
      link.textContent = model.name;
      li.appendChild(link);
      ul.appendChild(li);
    });
  
    container.innerHTML = "";
    
}

/////from 15.4.2024.

// Additional exercise
// Create an array called guestlist that contains some names
// When opening the document, these name are shown in a <ul></ul> element by adding them as list-items (<li></li>)
// Above the ul-element, add an input type text field with a button 'add' next to it.
// When you open the document, all the names in the guestlist array are shown in the ul-element.
// When you write a name in the input field, the name is added to the array and to the ul-element
// You should be able to remove any name from the ul-element (make sure to also delete that name from the guestlist array)

let guestlist = ["Alice", "Bob", "Charlie", "Kartoffel", "patata", "potatoe"];
let guestlistElement = document.getElementById("guestlist");
let addButton = document.getElementById("addButton");
let guestNameInput = document.getElementById("guestName");

function updateGuestlist() {
  guestlistElement.innerHTML = ""; // Clear existing list items

  for (let key in guestlist) {
    let guest = guestlist[key];
    let listItem = document.createElement("li");
    listItem.textContent = guest;
    listItem.setAttribute ("data-id",key);
    listItem.addEventListener("click", () => {
    let index = listItem.getAttribute("data-id")
    guestlist.splice(index, 1);
    updateGuestlist();
      
    });
    guestlistElement.appendChild(listItem);
  }
}

updateGuestlist(); // Display initial guest list

addButton.addEventListener("click", () => {
  let newGuestName = guestNameInput.value.trim();
  if (newGuestName) {
    guestlist.push(newGuestName);
    updateGuestlist();
    guestNameInput.value = ""; // Clear input field
  }
});