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

var fight = function(enemyName) {
    
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
            
        }

        
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
            
            
    } // End of while function

}; // End of fight function

for(var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrayys start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);

    }
    else 
    {
        window.alert("You have lost your robot in battle! Game Over!");

        break;
    }

}



// fight();