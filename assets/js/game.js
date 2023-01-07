var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;

}; // End of random number function

// creating  prompt

var playerInfo = {
    name: window.prompt("what is your robot's name ?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("refilling player's health by 20 for $7");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("you don't have enough money!");
        }
        
    },
    upgradeAttack: function() {

        if (this.money >= 7) {
            window.alert("upgrading player's attack by 6 for $7");
            this.attack += 6;
        this.money -= 7;
        }
        else {
            window.alert("you don't have enough money!")
        }
        
    }
};

// var playerInfo.name = window.prompt("what is your robot's name");

// var playerInfo.health = 100;

// var playerInfo.attack = 10;

// var playerInfo.money = 10;

// Log multiple values

console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

// var enemy.names = ["Pedro", "Roberto", "Lara"];

// var enemy.health = 50;

// var enemy.attack = 12;

var enemyInfo = [
{ 
   name: "Pedro",
   attack: randomNumber(10, 14)
}, 
{
    name: "Roberto",
    attack: randomNumber(10, 14)
},
{
    name: "Lara",
    attack: randomNumber(10, 14)
}
];

var fight = function(enemy) {
    // console.log(enemy);
    
    while(playerInfo.health > 0 && enemy.health > 0) 
    {

        var promptFight = window.prompt("Would you like to fight or skip this fight? Eneter 'FIGHT' or 'SKIP' to choose.");

        console.log(promptFight);

        // if player picks "skip" confirm and the stop the loop

        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") 
        
        {
        
            window.alert(playerInfo.name + " has chosen to skip the fight!");

            var confirmSkip = window.confirm("Are you sure you want to skip this fight?")
            console.log(confirmSkip);

            if (confirmSkip) 
            {
             
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

                playerInfo.money = Math.max(0, playerInfo.money - 10);
                window.alert(playerInfo.name + " now has $" + playerInfo.money);
                console.log(playerInfo.money);

                break;
            }
            
        }

        
            // remove enemy's health by subtracting the amount of 'playerInfo.attack' from 'enemy.health' & update new value of 'enemy.health'. 

            var damage = randomNumber(playerInfo.attack -3, playerInfo.attack)

            enemy.health = Math.max(0, enemy.health - damage);
            

                // log a resulting message to the console
                console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

                // check enemy's health

                if (enemy.health <=0) {
                    window.alert(enemy.name + " has died!");

                // award player money for winning 
                playerInfo.money = playerInfo.money + 20;
                
                // leave while() loop since enemy is dead
                break;

                }
                else 
                {
                 window.alert(enemy.name + " still has " + enemy.health + " health left.");
                };

            // subtract value of 'enemy.attack' from 'playerInfo.health' & update new value of 'playerInfo.health'. 
            // generate random damage value based on player's attack power
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            

            playerInfo.health = Math.max(0, playerInfo.health - damage);

                // log a resulting message to the console
                console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining!");

                // check player's health

                if (playerInfo.health <=0) {
                    window.alert(playerInfo.name + " has died!");

                    break;
                }
                else 
                {
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                }
            
            
    } // End of while function

}; // End of fight function

// var randomNumber = function(min, max) {
//     var value = Math.floor(Math.random() * (max - min + 1)) + min;

//     return value;

// }; // End of random number function

var startGame = function() {
    // reset player stats

    playerInfo.reset();
    
    for(var i = 0; i < enemyInfo.length; i++) {
        
        if (playerInfo.health > 0) {
            console.log(playerInfo.health);
            // let player know what round they are in, remember that arrayys start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
        
            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            // console.log(enemy.health);
            // window.alert(pickedenemy.name + " starts with health of " + enemy.health);

            // use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;

            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerInfo.money + ".")
        console.log(playerInfo.money)
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
        //   playerInfo.health = playerInfo.health + 20;
        //   playerInfo.money = playerInfo.money - 7;
          playerInfo.refillHealth();
          break;

        case "upgrade":
            window.alert("Upgrading player's attack by 6 for 7 dollers.");
            
          // increase attack and decrease money
        //   playerInfo.attack = playerInfo.attack + 6;
        //   playerInfo.money = playerInfo.money - 7;
          playerInfo.upgradeAttack();
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