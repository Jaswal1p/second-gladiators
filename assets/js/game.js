// creating  prompt

var playerName = window.prompt("what is your robot's name");

var playerHealth = 100;

var playerAttack = 10;

// Log multiple values

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Pedro";

var enemyHealth = 50;

var enemyAttack = 12;

var fight = function() {
    // Alert players of game start
    window.alert("WELCOME to Robot Gladiators!");

    // subtract value of 'playerAttack' from 'enemyHealth' & update new value of 'enemyHealth'. 
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // subtract value of 'enemyAttack' from 'playerHealth' & update new value of 'playerHealth'. 
    playerHealth = playerHealth - enemyAttack;

    // log a resulting message to the console
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining!");

};

// var endFight = function () {
//     window.alert("Fight has ended")
// };

// creating a function named "fight"

// function fight() {
//     window.alert("The fight has begun");

// }

fight();