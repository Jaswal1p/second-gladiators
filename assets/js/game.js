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

                playerMoney = Math.max(0, playerMoney - 10);
                window.alert(playerName + " now has $" + playerMoney);
                console.log(playerMoney);

                break;
            }
            
        }

        
            // remove enemy's health by subtracting the amount of 'playerAttack' from 'enemyHealth' & update new value of 'enemyHealth'. 

            var damage = randomNumber(playerAttack -3, playerAttack)

            enemyHealth = Math.max(0, enemyHealth - damage);
            

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
            // generate random damage value based on player's attack power
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            

            playerHealth = Math.max(0, playerHealth - damage);

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

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;

}; // End of random number function

var startGame = function() {
    // reset player stats

    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for(var i = 0; i < enemyNames.length; i++) {
        
        if (playerHealth > 0) {
            console.log(playerHealth);
            // let player know what round they are in, remember that arrayys start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
        
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = randomNumber(40, 60);
            console.log(enemyHealth);
            window.alert(pickedEnemyName + " starts with health of " + enemyHealth);

            // use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            // if player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length -1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, would you like to visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                  shop(); 
                }
              
            }
            
        }
        else 
        {
            window.alert("You have lost your robot in battle! Game Over!");

            break;
        }
        
    };


    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame()

}; // End of startGame function

var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney + ".")
    }
    else {
        window.alert("you've lost your robot in battle.")
    }
    // ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?")
    
    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    
}; // End of endGame function

var shop = function() {
    // ask player what they would like to do

    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or Leave the store? Please eneter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt.toLowerCase()) {
        case "refill":
          window.alert("Refilling player's health by 20 for 7 dollers.");
          
          // increase health and decrease money
          playerHealth = playerHealth + 20;
          playerMoney = playerMoney - 7;
          break;

        case "upgrade":
            window.alert("Upgrading player's attack by 6 for 7 dollers.");
            
          // increase health and decrease money
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 7;
          break;  

        case "leave":
            window.alert("You are leaving the shop without buying anything!");
            
          // do nothing so function will end
          
          break; 

        default:
            window.alert("Please enter a valid option") 
            
            shop();
            break;
    }
    
}; // End of shop function



// console.log(Math);

//  console.log(Math.random());
//  console.log(Math.random());
//  console.log(Math.random());
//  console.log(Math.random());

// console.log(Math.max(1,10,100, 1000));
// console.log(Math.min(-10,-1, 1, 10, 100, 1000));
// console.log(Math.max(-100, -10, -1, 0));



// Start the game when the page loads
startGame();


// fight();