let getSubArray = (array, firstIndex, lastIndex) => {
    console.log(array.slice(firstIndex, lastIndex+1))
}

let myArray = [1,2,3,4,5,6,7,8,9,10];
getSubArray(myArray, 0, 4)

// Checking if the arrai contains only strings or only numbers
let number = 9;
let string = 'cat';
//console.log(string.length !== undefined);
//console.log(number.length !== undefined)
console.log(length in string)


