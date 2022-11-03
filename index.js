// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

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



let bioData={

  myname:"maithili",
  myAge:"26",
  getData(){
  console.log(`my name is ${bioData.myname}`)
  }
  
  }
  
bioData.getData()
