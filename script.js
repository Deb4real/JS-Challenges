// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number
function IsNumberPositive(event) {
    const IsNumberPositive=event.target.value;

    if (IsNumberPositive>=10) {
        return true
    } else if (IsNumberPositive<=-1) {
        return false
    }  
}
alert(IsNumberPositive(10));

// 2. Write a function that takes a number of days and converts it into an age
function convertsDaystoAge(event) {
    const age=(3650);
    return age/365;
console.log(convertsDaystoAge(3650/365));
}

// 3. Write a function that takes three numbers and returns the largest of the three numbers
function getLargestNumber(event) {
    const getLargestNumber=(a,b,c);

    if ((a >= b) && (a >= c)) {
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
console.log(getLargestNumber(2,1,4));
}

// 4. Write a function that takes an array of names and returns the last name from the array of names
function getLastName(event) {
    let names=["Charlie", "Rob", "Andy"];
    console.log(names[2]);
}

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one oe more negative numbers in the array
function allNumbersPositive(event) {
    let numbers=[-5,4,6];
    if(numbers<=-5) {
        console.log(false)
    }
}
