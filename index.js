// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//programs

//first way of creating object

// let bioData={

//   myname:"maithili",
//   myAge:"26",
//   getData:function(){
//   console.log(`my name is ${bioData.myname}`)
//   }

//   }

// bioData.getData()

//second way of creating object

// let bioData={

//   myname:"maithili",
//   myAge:"26",
//   getData(){
//   console.log(`my name is ${bioData.myname}`)
//   }

//   }

// bioData.getData()

//object inside object

// let bioData = {
//   myname: {
//     firstname: 'maithili',
//     lastname: 'kammila',
//   },
//   myAge: '26',
//   getData() {
//     console.log(`my name is ${bioData.myname}`);
//   },
// };

// bioData.getData();

// challenge :

//write a function that would return the nth largest element from start or end

// for e.g:array=[3,2,1,5,6,4];

// if n=2 then return 5

// function sort(array, n) {
//   //first sort the array
//   let temp;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   console.log(array);
//   // find the nth max in the sorted array
//   let max = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//     }
//   }

//   console.log(max);
//   let index = array.length - n;
//   let nthmax = array[index];
//   console.log(n + 'th largest number is' + nthmax);
// }
// sort([3, 2, 1, 5, 6, 4], -1);

//Test Cases for the above function

//positive test cases:

//Only int data type is accepted: Need to test parameter n  accept only int data type as a parameter.
//n value should be greater than 1.

//negative test cases:

//Verify for non –int type data: Verify if variable n is a numeric and int type only and do not accept alpha characters or others.
//Test boundary conditions: int data type has a range e.g. n is from 1 to n So, we need to test n parameter\with boundary conditions for example starting from 1.etc.

//possible test cases:

//array=[3,2,1,5,6,4]

// n value ranges from 1 to array.length ----------positive test cases

//if n=1 return 6
//if n=2 return 5
//if n=3 return 4
//if n=4 return 3
//if n=5 return 2
//if n=6 return 1

//  n value is non integer or less than 1 ---------negative test cases

//if n=0 return undefined
//if n=-1 return undefined

// let temp;

// let arr = [3,2,8,5,4,2];
// for (let i = 0; i < arr. length; i++) {
//    for (let j = i + 1; j < arr. length; j++) {
//      if (arr[i] < arr[j]) { temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
//      }
//     }
//    }

//    console.log(arr);

//  let concatedArray=arr.join("");

//  console.log(concatedArray);

//  const array = String(concatedArray)
// .split('')
// .map(str => Number(str));

// console.log(array);

//step1: we will have an array
//step2:join the array
//step3:split the array
//step4:sort the array in descending order
//step 5: join again

//step 6:return largest number.

// function arrayLargestNumber(array) {
//   let temp;
//   let concatedArray = array.join('');

//   console.log(concatedArray);

//   let newArray = String(concatedArray)
//     .split('')
//     .map((str) => Number(str));

//   console.log(newArray);

//   for (let i = 0; i < newArray.length; i++) {
//     for (let j = i + 1; j < newArray.length; j++) {
//       if (newArray[i] < newArray[j]) {
//         temp = newArray[i];
//         newArray[i] = newArray[j];
//         newArray[j] = temp;
//       }
//     }
//   }

//   console.log(newArray);

//   let finalResult = newArray.join('');
//   console.log(finalResult);
// }

// arrayLargestNumber([2, 20, -24, 6, 8]);

// const person={
//   name:"fred",
//   age:27
// }

// console.log(Object.values(person));
// console.log(Object.entries(person));

// const array=[3,2,4,2,5,6,[2,3,4],[]]

// const flatArray=array.flat(1)
// console.log(flatArray)

// function sort(array, n) {
//   //first sort the array
//   let temp;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   console.log(array);
//   // find the nth max in the sorted array
//   // let max = array[0];
//   // for (let i = 0; i < array.length; i++) {
//   //   if (max < array[i]) {
//   //     max = array[i];
//   //   }
//   // }

//   // console.log(max);
//   let index = array.length - n;
//   let nthmax = array[index];
//   console.log(n + 'th largest number is' + nthmax);
// }
// sort([3, 2, 1, 5, 6, 4], 1);

function arrayLargestNumber(array) {
  let temp;
  let concatedArray = array.join('');

  console.log(concatedArray);

  let newArray = String(concatedArray)
    .split('')
    .map((str) => Number(str));

  console.log(newArray);

  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[i] < newArray[j]) {
        temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
    }
  }

  console.log(newArray);

  let finalResult = newArray.join('');
  console.log(finalResult);
}

arrayLargestNumber([2, 20, 24, 6, 8]);
