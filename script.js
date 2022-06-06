//**pseudocode*//
// 1. keep a random number between 1-100 in the background.(+)
// 2. The user makes a guess.
// 3. The number is compared and guided up/down until the user guess the  correct number.
// For example:
// Let your number be 65 and user guessed '20' the first time.
// Prompt the user to "Enter a number between 20 and 100".
// If the user guessed 80 on the second guess, this time you should prompt "Enter a number between 20 (the lowest guess closest to your number) to 80 (the closest big guess to your number)".



let number = Math.floor(Math.random()*101)
let guess = document.getElementById("input");
let result = document.getElementById("result");
let last = document.querySelector(".last");
let first = document.querySelector(".first");
let btn = document.getElementById("btn");
let life = 7;
console.log(number);

const getValueInput = () => {
  
if (life>1){  
  if (guess.value >100 || guess.value < 0){
      result.innerHTML="Enter guess a valid number between 0 and 100!";
  } else {
    if ( guess.value > number){
      result.innerHTML = ` 👎DOWN `;
      life--;
      last.innerText = guess.value;
    }
    else if ( guess.value < number ){
      result.innerHTML = `👍UP`;
      life--;
      first.innerText = guess.value;
    }
    else if (guess.value ==number) {
      result.innerHTML = `you win!`
      life--;
      btn.style.display="none";
    }
  }
}
else {
  result.innerHTML = `you lost!`
  btn.style.display="none";
  life--;
 }
document.getElementById("life").innerHTML = life;
};

