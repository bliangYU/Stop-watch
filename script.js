window.onload = function () {
  var minutes = 00;
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  let tableValue = document.getElementById('value');
  let buttonLap = document.getElementById('button-lap');
  
  let lapCounter = 0;
  
  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }
  
  buttonStop.onclick = function() {
       clearInterval(Interval);
  }
    
  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    minutes = "0";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    document.getElementById("results").innerHTML = "";
    lapCounter = 0;
  }
  
buttonLap.onclick = function() {
  // create a new row element
  let newRow = document.createElement('tr');
  // create cells for the lap time data
  let lapNumber = document.createElement('td');
  let lapTime = document.createElement('td');
  // set the text content of the cells
  lapCounter++;
  lapNumber.innerText = "Lap " + lapCounter;
  lapTime.innerText = appendMinutes.innerText + ":" + appendSeconds.innerText + ":" + appendTens.innerText;
  // append the cells to the new row
  newRow.appendChild(lapNumber);
  newRow.appendChild(lapTime);
  // append the new row to the results table
  let resultsTable = document.getElementById("results");
  resultsTable.appendChild(newRow);
  // add border styles to the table
  resultsTable.classList.add("table-bordered"); 
}
  
  function startTimer () {
    tens++; 
    // :0+9
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    // :10
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    // restarts counter from 99 to 0 
    if (tens > 99) {
      console.log("seconds");
      //adds one to the seconds counter 00:01:00
      seconds++;
      // :00:0+9:00
      appendSeconds.innerHTML = "0" + seconds;
      //resets tens when it reaches 99
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    // 00:10:00 removes the 0+9 after reaching 10 to :10
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }


    // minutes
    if(minutes <= 9){
      appendMinutes.innerHTML = "0" + minutes;
    }
    
    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
    
    if (minutes > 9){
      appendMinutes.innerHTML = minutes;
    }  
  }


}
// Dark Mode Toggle
function toggleDarkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");

   if (element.classList.contains("dark-mode")) {
       element.style.backgroundColor = "#3b3939";
   } else {
       element.style.backgroundColor = "white";
   }
}

