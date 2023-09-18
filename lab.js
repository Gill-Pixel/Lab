// TASK #1, Create a simple interactive app.

// a) (5 pts) Add code to the app to ask the user for a number via a prompt call. 
//The number should be displayed on a tag on the corresponding web page with a prefix of Quantity. 
//For example, if 80 is entered, then you should see this on the web page. 

//Quantity: 80
let number = prompt("Give me a number: ");
number = parseFloat(number);

let reftoTask1 = document.querySelector(".task1");
reftoTask1.innerHTML = "Quantity:" + number;


// b) (15 pts ) Extend the app to ask the user to enter a percentage amount. 
//The app should compute this percentage of the number entered, and output the result 
//to the web page using a formatted string - with the percentage figure, the quantity and the result. 
//For example, if 50 is entered as the percentage amount, then you should see this on the web page,

// Quantity: 80

// 50% of Quantity, 80, is 40

// You should use a template literal to format the output string.

let percentageAmount = prompt("Enter percentage amount:");
percentage = parseFloat(percentageAmount);
let refToTask1b = document.querySelector(".task1b");
let calculatePercentage = (percentage/100) * number;

let displayStr = `${percentage} of ${number} is ${calculatePercentage}`;
refToTask1b.innerHTML = displayStr;

// Task #2: Variables & Conditionals (20 pts)
// Repeat the input/output techniques in the code from Task#1. This time turn it into a grade converter app.

// Ask the user for a grade between 1 and 100, via prompt. 
//Make sure to consider the data type of the variable that received the input.

let points= prompt("Give me a number: ");
points = parseFloat(points);

// Convert the points to a letter grade, using
// (a) (10 pts) an if with branches,

let ifStr = "";
if (points > 90)
    ifStr += "if: A";
else if (points > 80) ifStr += "if: B";

let refToTask2a = document.querySelector(".task2a");
refToTask2a.innerHTML = ifStr;

// (b) (10 pts) a switch statement (you are comparing values in a range).

// Display the grade on the corresponding web page. Use "(a)" as text in your output to denote the if computation, 
// and "(b)" to denote the switch computation.

// Use this scale => A : 91 - 100, B: 81 - 90, C: 71 - 80, D: 61-70, F: 0 - 69
let switchStr = "";
switch(true){
    case(points>90):
        switchStr = "switch: A";
        break;

    case (points >80):
        switchStr = "switch: B";
        break;

    default:
        switchStr = "INVALID";
}
let refToTask2b = document.querySelector(".task2b");
refToTask2b.innerHTML = switchStr;



// Task #3: Variables and loops(10 pts)
// Harry Potter mode. If you didn't see the movie, there is a part in which Professor Umbridge
//(a truly horrible character in the movie) punishes Harry Potter with some lines. We're going to help him out.

// - ask the user for the punishing professor name (like Umbridge)

// - ask the user for the line to write, like 'I must not tell lies'

// - ask for the number of times the lines are to be written

// - use a for loop to write the lines, each preceded with the line number
//(like 1: I must not tell lies, 2: I must not tell lies ... 100: I must not tell lies) to the console.

let profName = prompt("Name of Professor: ");
let line = prompt("What to write for line: ");
let numLines = prompt("How many lines? ");
numLines = parseFloat(numLines);

for (let lineNum = 1; lineNum <= numLines; lineNum++){
    console.log(lineNum + ";" + line);
}

//Task #4

//Change task #3 to write to an element on the web page instead of the console, 
//and to use a while loop. Make sure to use a new line for each line.

const professorName = prompt("Enter a professor's name:");
const lineToWrite = prompt("Enter a line to write:");
const numberOfTimes = parseInt(prompt("Enter the number of times to write the lines:"));

let lineNumber = 1;

// Initialize a variable to store the lines
let lines_1 = "";

    // Use a while loop to generate the lines
    while (lineNumber <= numberOfTimes) {
        // Append the current line with line number to the lines variable
        lines_1 += lineNumber + ": " + lineToWrite + "<br>";
        lineNumber++;
    }

    // Display the lines on the web page
    document.body.innerHTML = `<h2>${professorName}'s Punishment</h2>${lines_1}`;


//TASK #5
const lines = () =>{
    let profName = prompt("Name of Professor: ");
    let line = prompt("What to write for line: ");
    let numLines = prompt("How many lines? ");
    numLines = parseFloat(numLines);
    let displayStr = "";

    for (let lineNum = 1; lineNum <= numLines; lineNum++){
        displayStr += `${lineNum} ; ${line} <br>`;
    }

    let refToTask5 = document.querySelector(".task5");
    refToTask5.innerHTML = displayStr;
}

lines();

//Task #6
const timesTable = function(number) {
    let str = "";
    let firstFactor = number;
    let secondFactor = 1;
    while (secondFactor <= 12) {
    let product = firstFactor * secondFactor;
    str += `${firstFactor} X ${secondFactor} = ${product}<br>`;
    secondFactor++;}
    
    str+= `<br> ---------------------- <br>`;
    return(str);
}
    
    task6_str = "";
    for (let number = 1; number <= 12; number++) {
    task6_str += timesTable(number);
    }
    
    let refTotask6Div = document.querySelector(".task6c");
    refTotask6Div.innerHTML = task6_str;

//Task #7

    // In a multi-line comment in your code, explain what hoisting is, in the context of

    // a) a function, and variable
    // Hoisiting is when you can use a function or a variable before it's declared in your code. 
    // However during a function declaration, it doesn't just hoist the function's name, 
    // it also hoists the actual function definition.
    
    // Give a coded example of hoisting, using
    
    // a) a function
    Hello();
    function Hello() {
        console.log("Hello, world!");
    }
    
    // b) a variable
    console.log(x); // This will output 'undefined'
    var x = 10;

    // In a multiline comment in your code, after the coded example of hoisting (above), 
    //explain how the ECMA standards resolved the issue of hoisting.

    //In order to solve the hoisting problems in the code, ECMA intriduced variables 'let' and 'const'
    // which make behavior more predictable and help developers catch errors related to variable usage before initialization. 
    