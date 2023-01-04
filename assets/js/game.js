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
    window.alert("WELCOME to Robot Gladiators!")
};

var endFight = function () {
    window.alert("Fight has ended")
};

// creating a function named "fight"

// function fight() {
//     window.alert("The fight has begun");

// }

fight();