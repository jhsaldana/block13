//question one: Is Truthy
//scrip tag that follows the rules
let truthy = "I am a string";
//if the value is truthy, print true
if(truthy === "I am a string") {
    console.log(true);
} else {
    //if the value is falsey, print the corresponding result
    console.log(false);
}



//question two: Number Line
//take the sum of two numbers
let sum = 50 + 51;
//print corresponding result using if/else if/else statements
//if sum is less than -1000
if (sum<-1000) {
    console.log (" sum is less than -1000");
    } else if (sum<1) {
        console.log ("sum is a negative number");
    } else if (sum=0) {
        console.log ("sum is equal to 0");
    } else if (sum>0) {
        console.log ("sum is larger than 0");
    } else if (sum>100) {
        console.log ("sum is greater than 100");
    }



//question three: Greater than 5
//take two values
let num1 = 6;
let num2 = 4
// if both values are greater than or equal to 5
if (num1 >= 5 && num2 >=5) {
    //log out true
    console.log(true)
    } else {
        //else false
        console.log(false)
    }


//question four: Pair and Compare
//compare two sets of values
let param1A = 11;
let param1B = "eleven";

let param2A = "for";
let param2B = "four";

//print true if at least one of the pairs is truthy
if (param1A && param1B === param2A && param2B) {
    console.log(true);
} else {
    console.log(false)
}
