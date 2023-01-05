// creating  prompt

var playerName = window.prompt("what is your robot's name");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

// Log multiple values

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Pedro", "Roberto", "Lara"];

var enemyHealth = 50;

var enemyAttack = 12;


// for(var i = 0; i < enemyNames.length; i++) {
//     fight(enemyNames[i]);
// }

var fight = function(enemyName) {
    // Alert players of game start
    window.alert("WELCOME to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to fight or skip this fight? Eneter 'FIGHT' or 'SKIP' to choose.");

    console.log(promptFight);

    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

        // subtract value of 'playerAttack' from 'enemyHealth' & update new value of 'enemyHealth'. 
        enemyHealth = enemyHealth - playerAttack;

            // log a resulting message to the console
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

            // check enemy's health

            if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            };

        // subtract value of 'enemyAttack' from 'playerHealth' & update new value of 'playerHealth'. 
        playerHealth = playerHealth - enemyAttack;

            // log a resulting message to the console
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining!");

            // check player's health

            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        
           
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    
    window.alert(playerName + " has chosen to skip the fight!");

    var confirmSkip = window.confirm("Are you sure you want to skip this fight?")
    console.log(confirmSkip);

    if (confirmSkip) {

       window.alert(playerName + " has decided to skip this fight. Goodbye!");

       playerMoney = playerMoney - 2;   
       console.log(playerMoney)
       }
        else {
            fight();
        }

    } else {
    window.alert("You need to choose a valid option!");

    
    }

};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}





// fight();