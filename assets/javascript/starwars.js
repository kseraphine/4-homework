var attack;
var playerCharacter;
var opponent;
var fighters;
var attackRound;
var playerHP; //depends on character chosen maybe should be characterHP for all?
var playerAP = playerCAP * attackRound;
var playerCAP; //depends on the character
var opponentHP; //depends on the character
var opponentCAP; //depends on the character

window.onload = function(){
  //How can I make this more automatic? like set whatever the users clicks as playerCharacter and then
  //$('#attack').click(attackFunction);//TODO: Create a function for attack
  //$('#pickCharacter').click(pickFunction); //TODO: Create a function for what happens; started below.
  //$('#pickOpponent').click(pickOpponent); //TODO: Create a function for what happens
pickFunction();


  function pickFunction() {
    $('header').html("<h2>Pick your character</h2>");
    $(".fighters").click(function(){
      playerCharacter = $(this).addClass("playerCharacter").removeClass("fighters").appendTo(".playerArea");
      console.log(playerCharacter);
      $(".fighters").removeClass("fighters").addClass("fighters2");
      pickOpponent();
      //$(".HPstat").appendTo("#playerHP");
      function pickOpponent() {
        $('header').html("<h2>Pick your opponent</h2>");
        $(".fighters2").click(function(){
          opponent = $(this).addClass("opponent").removeClass("fighters2 playerCharacter").appendTo(".enemyArea");
          console.log(opponent);
        });
      }
    });
  };








  //Create a starting screen
  //The captain planet game will be useful to move the photos around.  Although it might be easier just to ise appendTo to move them.
  //When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

  //The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.
  //TODO: Create an if statement that says if playerCharacter is "_" then...and run a function that takes everything that's not player's choice and rearranges them.  I need to figure out how to pass player choice, maybe the same way we did for the coinflip game in activity 5.2.

  //The player chooses an opponent by clicking on an enemy's picture.

  //Once the player selects an opponent, that enemy is moved to a defender area.

  //The player will now be able to click the attack button.

  //Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture.
  //The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture. //use what we learned in coinflip activity 5.2/1 to choose random numbers for damage, etc.
  //The player will keep hitting the attack button in an effort to defeat their opponent.

  //When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.
  //The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.

  //Game design notes:

  //Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

  //Each time the player attacks, their character's Attack Power increases by its base Attack Power.

  //For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
  //The enemy character only has Counter Attack Power.

  //Unlike the player's Attack Points, Counter Attack Power never changes.
  //The Health Points, Attack Power and Counter Attack Power of each character must differ.

  //No characters in the game can heal or recover Health Points.

  //A winning player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. Healing options would mess with this dynamic.
  //Your players should be able to win and lose the game no matter what character
  //they choose. The challenge should come from picking the right enemies, not
  //choosing the strongest player.
};