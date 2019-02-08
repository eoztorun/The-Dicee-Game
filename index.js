//generate a random number between 1 and 6.
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

var dice1 = document.querySelector(".img1");
dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var dice2 = document.querySelector(".img2");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

//select the h1 heading
var heading = document.querySelector("h1");

//display message for the results
if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins";
}

else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins 🚩";
}

else {
    heading.textContent = "Draw!";
}
