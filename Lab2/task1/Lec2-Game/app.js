/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer,array;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
i = 0;
array = [];


//var dice = Math.floor(Math.random() * 6) +1;
//document.querySelector('#current-0').textContent = dice;
//document.querySelector('#current-' + activePlayer).textcontent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

function btn(){

    //do something
}
btn();

//Event listener
document.querySelector('.btn-roll').addEventListener('click', function(){


    //1.random number
    var dice = Math.floor(Math.random() * 6) +1;
    console.log(dice);

    //2.display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3. update the round score IF the rolled number is not a 1

    if(dice !== 1){
       //add score
       roundScore += dice;
        
       document.querySelector('#current-' + activePlayer).textContent = roundScore; 
       //document.getElementById('current-'+ activePlayer).textContent = roundScore; 

    array[i]=dice;
    console.log(array)
      i = i +1 ;
    if (dice == 6 && array[i-2] ==  6 ) {
           nextPlayer();
       }
    } else  { 
        nextPlayer();

    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    //add current score to global score
    scores[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

     var input = document.querySelector('.final-score').value;
        var winningScore;

    if(input) {
            winningScore = input;
    
    } else {
            winningScore = 100;
        }

    //check if player won the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }
    else{
        //nextPlayer
        nextPlayer();
    }





});


function nextPlayer(){

         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        array = [];




}