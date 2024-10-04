// 1 Ans

function calculateSum(a,b){
    let Fast = a;
    let second = b;
    let sum = Fast+second;
    console.log(sum)
}

calculateSum(20, 5)

// 2 Ans 
function isEven(m){
    let back = m;
    if (m % 2 == 1){
        return false;
    }
    else{
        return true;
    }
}
const resultN = isEven(2);
console.log(resultN)
// 3 Ans Find Max value
let arrayName = [1,5,80,4,3,6,50,60];
function findMax(arr){
let data = arr[0];
    for (let i = 0;i<arr.length; i++){
    if(arr[i]>data)
        data=arr[i]
    }
    return data;
}
console.log(findMax(arrayName))

// 4 Ans reverseString

const input="Md Enamul Firoz"
function reverseString(data){
    let input = data;
    return data.split('').reverse().join('')

}
console.log( reverseString(input))

// 5 Ans 

let oldArray = [1,5,80,4,3,6,50,60,61];
function oldFunction(arr){
    let newArr = [];
    for (let i = 0;i<arr.length; i++){
        if(arr[i] % 2 === 1){
            newArr.push(arr[i]);
        }
    }
    return newArr ;
}
console.log(oldFunction(oldArray))

// 6 Ans 
let arraySum = [1, 2, 3, 4, 5];
function sumArray(m){
    const numbers = m;
    let sum = numbers.reduce((accumulator, current) => accumulator + current);
    return sum;
}
console.log(sumArray(arraySum))

// 7 Ans 
let arrayShort = [1, 5, 3, 2, 6, 4];
function sortArray(f){
    let newArray= f.sort()
    return newArray;
}
console.log(sortArray(arrayShort))

// 8 Ans 
let arrayCapital = "hello"; 
function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.slice(1);

}
console.log(capitalizeFirstLetter(arrayCapital))

// Live Test  

function circuitPower(voltage,current ){
    let voltageValue = voltage;
    let currentValue = current;
    let power = voltageValue * currentValue;
    console.log(power)
}
circuitPower(110, 3)


let arrayName = [1,5,80,4,3,6,50,60];
function findMax(arr){
let data = arr[0];
    for (let i = 0;i<arr.length; i++){
    if(arr[i]>data)
        data=arr[i]
    }
    return data;
}
console.log(findMax(arrayName))


const array1 = [1,5,80,4,3,6,50,60];
const array2 = [2,1,0,40,5,6];
function mergeArrays(arr1, arr2 ){
    let arr1Value = arr1;
    let arr2Value =  arr2;
    let march = arr1Value + "," + arr2Value;
    console.log(march)
}
mergeArrays(array1, array2 )


function arrayValuesTypes(arrayFind){
    arrayFind.forEach(function(item){
        console.log(typeof item);
    });
}

arrayValuesTypes([2, 10, "number", []])