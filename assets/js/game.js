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

// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at" + " index")
//     }


var fight = function(enemyName) {
    // Alert players of game start
    // window.alert("WELCOME to Robot Gladiators!");

    while(playerHealth > 0 && enemyHealth > 0) 
    {

        var promptFight = window.prompt("Would you like to fight or skip this fight? Eneter 'FIGHT' or 'SKIP' to choose.");

        console.log(promptFight);

        // if player picks "skip" confirm and the stop the loop

        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") 
        
        {
        
            window.alert(playerName + " has chosen to skip the fight!");

            var confirmSkip = window.confirm("Are you sure you want to skip this fight?")
            console.log(confirmSkip);

            if (confirmSkip) 
            {
             
                window.alert(playerName + " has decided to skip this fight. Goodbye!");

                playerMoney = playerMoney - 10;   
                console.log(playerMoney)

                break;
            }
            // else 
            // {
            //     fight();
            // }

        }

        // if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") 
        // {

            // remove enemy's health by subtracting the amount of 'playerAttack' from 'enemyHealth' & update new value of 'enemyHealth'. 
            enemyHealth = enemyHealth - playerAttack;

                // log a resulting message to the console
                console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

                // check enemy's health

                if (enemyHealth <=0) {
                    window.alert(enemyName + " has died!");

                // award player money for winning 
                playerMoney = playerMoney + 20;
                
                // leave while() loop since enemy is dead

                break;
                }

                else 
                {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                };

            // subtract value of 'enemyAttack' from 'playerHealth' & update new value of 'playerHealth'. 
            playerHealth = playerHealth - enemyAttack;

                // log a resulting message to the console
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining!");

                // check player's health

                if (playerHealth <=0) {
                    window.alert(playerName + " has died!");

                    break;
                }
                
                else 
                
                {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
            
            
        // } 
        // else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") 
        
        // {
        
        //     window.alert(playerName + " has chosen to skip the fight!");

        //     var confirmSkip = window.confirm("Are you sure you want to skip this fight?")
        //     console.log(confirmSkip);

        //     if (confirmSkip) {
             
        // window.alert(playerName + " has decided to skip this fight. Goodbye!");

        // playerMoney = playerMoney - 10;   
        // console.log(playerMoney)
        // break;
        // }
        //     else {
        //         fight();
        //     }

        // } 
        
        // else {
        //         window.alert("You need to choose a valid option!");
                    
        //         }

        
        
    } // End of while function



}; // End of fight function

for(var i = 0; i < enemyNames.length; i++) {

        // console.log(enemyNames[i]);
        // console.log(i);
        // console.log(enemyNames[i] + " is at" + " index")

        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;

        fight(pickedEnemyName);
}



// fight();