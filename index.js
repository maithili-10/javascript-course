// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let bioData={

  myname:"maithili",
  myAge:"26",
  getData:function(){
  console.log(`my name is ${bioData.myname}`)
  }
  
  }
  
bioData.getData()