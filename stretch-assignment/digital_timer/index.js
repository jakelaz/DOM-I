let startTimerBtn = document.getElementById('startTimer');

startTimerBtn.addEventListener('click', (event) => {
  startTimer();
});

let msTens = document.getElementById('msTens'),
    msHundreds = document.getElementById('msHundreds'),
    secondOnes = document.getElementById('secondOnes'),
    secondTens = document.getElementById('secondTens'),
    digits = document.querySelector('.digits'),
    msTensVal = 0,
    msHundredsVal = 0,
    secondOnesVal = 0,
    secondTensVal = 0;

function startTimer(){
  msTensInterval = setInterval(msTensTimer, 10);
  msHundredsInterval = setInterval(msHundredsTimer, 100);
  secondOnesInterval = setInterval(secondOneTimer, 1000);
  secondTensInterval = setInterval(secondTenTimer, 10000);
}

function stopTimer(){
  clearInterval(msTensInterval);
  clearInterval(msHundredsInterval);
  clearInterval(secondOnesInterval);
  clearInterval(secondTensInterval);
}

function msTensTimer() {
    msTensVal < 9 ? msTensVal++ : msTensVal = 0;
    msTens.textContent = msTensVal;  
}
function msHundredsTimer() {
    
    msHundredsVal < 9 ? msHundredsVal++ : msHundredsVal = 0;
    msHundreds.textContent = msHundredsVal;
}
function secondOneTimer() {
     
    if(secondOnesVal < 9){
        secondOnesVal++
    } else {
      secondOnesVal = 0; 
    }
    secondOnes.textContent = secondOnesVal; 
}
function secondTenTimer() {
    if(secondTensVal < 1){
      digits.classList.add("redDigit");
      secondTensVal++;
      secondTens.textContent = secondTensVal; 
      stopTimer();
    } else{
      return;
    } 
}



