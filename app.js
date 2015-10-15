//declare array to store every play data
var playsData = ['','','','','','','','',''];
var winnerIndex = [0,0,0];
var playerID = 0;
var gameOver =false;
var counter = 0;
var playerName = ['',''];
var winnerCounter = [0,0];
//get the button objects in dom
var $btn1 = $('#1');
var $btn2 = $('#2');
var $btn3 = $('#3');
var $btn4 = $('#4');
var $btn5 = $('#5');
var $btn6 = $('#6');
var $btn7 = $('#7');
var $btn8 = $('#8');
var $btn9 = $('#9');

//function to initialize the game
var initialGame = function(){
  playsData = ['','','','','','','','',''];
  playerID = 0;
  gameOver = false;
  counter = 0;
  $('button').prop('disabled',false);
  $('button').css('border-color','rgba(0,0,0,.2)');
  //clear the buttons
for (var i = 1; i < 10; i++){
  $("#"+i).html(' ');
  }
  //assign wining counts to two boxes
$("#p1Count").html(winnerCounter[0]);
$("#p1Count").css('font-size','30px');
$("#p2Count").html(winnerCounter[1]);
$("#p2Count").css('font-size','30px');
}

//load game initialization when the window loaded
$(window).load(function() {
      initialGame();
      $('.container button').prop('disabled',true);
});

//handle click event, change button status from blank to occupied
var playGame = function(){
 var btnID = $(event.target).data('index');
 $(event.target).prop('disabled',true);
//get the id of the button just clicked and extract the number of it
//var btnID = parseInt($(this).prop('id'),10);
//console.log(btnID);
//update the playsData according to the button ID and the play ID 
if (playerID === 0) {
 playsData [btnID-1] = 'O'; 
//change the display on button
$(this).html('O');
$(this).css('font-size','40px');
//check the winner
checkWinner(btnID);
//change the playerID
playerID = 1;
//change mock up of next player
// $("#p1Border").css('border-color','#00CC33');
}else if (playerID === 1) {
  playsData [btnID-1] = 'X';
//change the display on button
$(this).html('X');
$(this).css('font-size','40px');
//check the winner
checkWinner(btnID);
//change the playerID
playerID = 0;
//change mock up of next player
}
if (gameOver === true){
  endTheGame();
}else if (gameOver ===true && counter === 8){
  endTheGame();
}
//use counter to check if the game reach a draw
else if (counter === 8 && gameOver !== true){
 //end the game as it is draw
   endDrawGame();
}else{
  counter ++;
}
//console.log(playsData);
}

//pop up window for getting player name when click the 'start game' button
var $startBtn = $('#gameOn');
$startBtn.on('click',function(){
  $(".form").fadeToggle();
  $(".form").css("display","block");  
});

//handle pop up window players name when the submit button is clicked
var $submitBtn = $('#subBtn');
$submitBtn.on("click",function(){
  //retrieve the input
  playerName[0] = $('#p1Name').val();
  playerName[1] = $('#p2Name').val();
  //assign player name to two boxes
$("#name1").html(playerName[0]);
$("#name1").css('font-size','30px');
$("#name2").html(playerName[1]);
$("#name2").css('font-size','30px');
//assign wining counts to two boxes
$("#p1Count").html(winnerCounter[0]);
$("#p1Count").css('font-size','30px');
$("#p2Count").html(winnerCounter[1]);
$("#p2Count").css('font-size','30px');
  //close the popup
  $(".form").fadeToggle();
  $(".form").css({"display":"none"});
  $('#start').css({"display":"none"});
    winnerCounter = [0,0];
  //initiate the game
  initialGame();
});

//button click event handler
$btn1.on('click',playGame);
$btn2.on('click',playGame);
$btn3.on('click',playGame);
$btn4.on('click',playGame);
$btn5.on('click',playGame);
$btn6.on('click',playGame);
$btn7.on('click',playGame);
$btn8.on('click',playGame);
$btn9.on('click',playGame);

//function to close the game when there is a winner
var endTheGame = function(){
  //change the shape and color of buttons
   for (var d=0;d<3;d++){
  $("#"+winnerIndex[d]).css('border-color','#3366CC ');
   }
 if (playerID === 1){
    $("#p1Border").css('border-color','#3366CC ');
    winnerCounter[0] ++;
    }else{
    $("#p2Border").css('border-color','#3366CC ');
    winnerCounter[1] ++;
  }

  //pop up the winning message, make an reset button
  showpopup();
}

// function to check the winner
var checkWinner = function(buttonNo){
  //get the current clicked button number 
  //use if statement to decide whether it fits the winning criteria
  console.log(buttonNo);
  //check button 1 whether there is a winner
if (buttonNo === 1){
  //check which player is making the move
  if (playerID === 0 ){
  //check whether player1 wins the game
    if ((playsData[0] === 'O') && (playsData[1] === 'O')&&(playsData[2] ==='O')){
         console.log('Player one is the winner on row 1');
         gameOver = true;
         winnerIndex = [1,2,3];
        // $(this).css('color','red');
    }else if ((playsData[0] === 'O') && (playsData[4] === 'O')&&(playsData[8] ==='O')){
         console.log('Player one is the winner on cross 1');
         gameOver = true;
        winnerIndex = [1,5,9];
    }else if ((playsData[0] === 'O') && (playsData[3] === 'O')&&(playsData[6] ==='O')){
         console.log('Player one is the winner on column 1');
         gameOver = true;
         winnerIndex = [1,4,7];
    }
  }else if (playerID === 1){
    if ((playsData[0] === 'X') && (playsData[1] === 'X')&&(playsData[2] ==='X')){
         console.log('Player two is the winner on row 1');
         gameOver = true;
        winnerIndex = [1,2,3];
    }else if ((playsData[0] === 'X') && (playsData[4] === 'X')&&(playsData[8] ==='X')){
         console.log('Player two is the winner on cross 1');
         gameOver = true;
          winnerIndex = [1,5,9];
    }else if ((playsData[0] === 'X') && (playsData[3] === 'X')&&(playsData[6] ==='X')){
         console.log('Player two is the winner on column 1');
         gameOver = true;
        winnerIndex = [1,4,7];
    }  
   }
 }
//check button 2 whether there is a winner
if (buttonNo === 2){
  if (playerID === 0 ){
    if ((playsData[0] === 'O') && (playsData[1] === 'O')&&(playsData[2] ==='O')){
         console.log('Player one is the winner on row 1');
         gameOver = true;
         winnerIndex = [1,2,3];
    }else if ((playsData[1] === 'O') && (playsData[4] === 'O')&&(playsData[7] ==='O')){
         console.log('Player one is the winner on column 2');
         gameOver = true;
         winnerIndex = [2,5,8];
    }
  }else if (playerID === 1){
    if ((playsData[0] === 'X') && (playsData[1] === 'X')&&(playsData[2] ==='X')){
         console.log('Player two is the winner on row 1');
         gameOver = true;
         winnerIndex = [1,2,3];
    }else if ((playsData[1] === 'X') && (playsData[4] === 'X')&&(playsData[7] ==='X')){
         console.log('Player two is the winner on column 2');
         gameOver = true;
         winnerIndex = [2,5,8];
    }
  }
 }
//check button 3 whether there is a winner
if (buttonNo === 3){
  if (playerID === 0 ){
    if ((playsData[0] === 'O') && (playsData[1] === 'O')&&(playsData[2] ==='O')){
         console.log('Player one is the winner on row 1');
         gameOver = true;
         winnerIndex = [1,2,3];
    }else if ((playsData[2] === 'O') && (playsData[4] === 'O')&&(playsData[6] ==='O')){
         console.log('Player one is the winner on cross 2');
         gameOver = true;
         winnerIndex = [3,5,7];
    }else if ((playsData[2] === 'O') && (playsData[5] === 'O')&&(playsData[8] ==='O')){
         console.log('Player one is the winner on column 3');
         gameOver = true;
         winnerIndex = [3,6,9];
    }
  }else if (playerID === 1){
    if ((playsData[0] === 'X') && (playsData[1] === 'X')&&(playsData[2] ==='X')){
         console.log('Player two is the winner on row 1');
         gameOver = true;
         winnerIndex = [1,2,3];
    }else if ((playsData[2] === 'X') && (playsData[4] === 'X')&&(playsData[6] ==='X')){
         console.log('Player two is the winner on cross 2');
         gameOver = true;
         winnerIndex = [3,5,7];
    }else if ((playsData[2] === 'X') && (playsData[5] === 'X')&&(playsData[8] ==='X')){
         console.log('Player two is the winner on column 3');
         gameOver = true;
         winnerIndex = [3,6,9];
  }  
  }
 }
//check button 4 whether there is a winner
if (buttonNo === 4){
  if (playerID === 0 ){
    if ((playsData[0] === 'O') && (playsData[3] === 'O')&&(playsData[6] ==='O')){
         console.log('Player one is the winner on column 1');
         gameOver = true;
         winnerIndex = [1,4,7];
    }else if ((playsData[3] === 'O') && (playsData[4] === 'O')&&(playsData[5] ==='O')){
         console.log('Player one is the winner on row 2');
          gameOver = true;
          winnerIndex = [4,5,6];
    }
  }else if (playerID === 1){
    if ((playsData[0] === 'X') && (playsData[3] === 'X')&&(playsData[6] ==='X')){
         console.log('Player two is the winner on column 1');
          gameOver = true;
          winnerIndex = [1,4,7];
    }else if ((playsData[3] === 'X') && (playsData[4] === 'X')&&(playsData[5] ==='X')){
         console.log('Player two is the winner on row 2');
          gameOver = true;
          winnerIndex = [4,5,6];
    }
  }
 }
 //check button 5 whether there is a winner
if (buttonNo === 5){
  if (playerID === 0 ){
    if ((playsData[1] === 'O') && (playsData[4] === 'O')&&(playsData[7] ==='O')){
         console.log('Player one is the winner on column 2');
          gameOver = true;
          winnerIndex = [2,5,8];
    }else if ((playsData[3] === 'O') && (playsData[4] === 'O')&&(playsData[5] ==='O')){
         console.log('Player one is the winner on row 2');
          gameOver = true;
          winnerIndex = [4,5,6];
    }
  }
  else if (playerID === 1){
    if ((playsData[1] === 'X') && (playsData[4] === 'X')&&(playsData[7] ==='X')){
         console.log('Player two is the winner on column 2');
          gameOver = true;
          winnerIndex = [2,5,8];
    }else if ((playsData[3] === 'X') && (playsData[4] === 'X')&&(playsData[5] ==='X')){
         console.log('Player two is the winner on row 2');
          gameOver = true;
          winnerIndex = [4,5,6];
    }  
   } 
 }
 //check button 6 whether there is a winner
if (buttonNo === 6){
  if (playerID === 0 ){
    if ((playsData[2] === 'O') && (playsData[5] === 'O')&&(playsData[8] ==='O')){
         console.log('Player one is the winner on column 3');
          gameOver = true;
          winnerIndex = [3,6,9];
    }else if ((playsData[3] === 'O') && (playsData[4] === 'O')&&(playsData[5] ==='O')){
         console.log('Player one is the winner on row 2');
          gameOver = true;
          winnerIndex = [4,5,6];
    }
  }else if (playerID === 1){
    if ((playsData[2] === 'X') && (playsData[5] === 'X')&&(playsData[8] ==='X')){
         console.log('Player two is the winner on column 3');
          gameOver = true;
          winnerIndex = [3,6,9];
    }else if ((playsData[3] === 'X') && (playsData[4] === 'X')&&(playsData[5] ==='X')){
         console.log('Player two is the winner on row 2');
          gameOver = true;
          winnerIndex = [4,5,6];
  }  
  }
 }
 //check button 7 whether there is a winner
if (buttonNo === 7){
  if (playerID === 0 ){
    if ((playsData[0] === 'O') && (playsData[3] === 'O')&&(playsData[6] ==='O')){
         console.log('Player one is the winner on column 1');
          gameOver = true;
          winnerIndex = [1,4,7];
    }else if ((playsData[2] === 'O') && (playsData[4] === 'O')&&(playsData[6] ==='O')){
         console.log('Player one is the winner on cross 2');
          gameOver = true;
          winnerIndex = [3,5,7];
    }else if ((playsData[6] === 'O') && (playsData[7] === 'O')&&(playsData[8] ==='O')){
         console.log('Player one is the winner on row 3');
          gameOver = true;
          winnerIndex = [7,8,9];
    }
  }else if (playerID === 1){
    if ((playsData[0] === 'X') && (playsData[3] === 'X')&&(playsData[6] ==='X')){
         console.log('Player two is the winner on column 1');
          gameOver = true;
          winnerIndex = [1,4,7];
    }else if ((playsData[2] === 'X') && (playsData[4] === 'X')&&(playsData[6] ==='X')){
         console.log('Player two is the winner on cross 2');
          gameOver = true;
          winnerIndex = [3,5,7];
    }else if ((playsData[6] === 'X') && (playsData[7] === 'X')&&(playsData[8] ==='X')){
         console.log('Player two is the winner on row 3');
          gameOver = true;
          winnerIndex = [7,8,9];
  }  
  }
 }

 //check button 8 whether there is a winner
if (buttonNo === 8){
  if (playerID === 0 ){
    if ((playsData[1] === 'O') && (playsData[4] === 'O')&&(playsData[7] ==='O')){
         console.log('Player one is the winner on column 2');
          gameOver = true;
          winnerIndex = [2,5,8];
    }else if ((playsData[6] === 'O') && (playsData[7] === 'O')&&(playsData[8] ==='O')){
         console.log('Player one is the winner on row 3');
          gameOver = true;
          winnerIndex = [7,8,9];
    }
  }else if (playerID === 1){
    if ((playsData[1] === 'X') && (playsData[4] === 'X')&&(playsData[7] ==='X')){
         console.log('Player two is the winner on column 2');
          gameOver = true;
          winnerIndex = [2,5,8];
    }else if ((playsData[6] === 'X') && (playsData[7] === 'X')&&(playsData[8] ==='X')){
         console.log('Player two is the winner on row 3');
          gameOver = true;
          winnerIndex = [7,8,9];
  }  
  }
 }
 //check button 9 whether there is a winner
if (buttonNo === 9){
  if (playerID === 0 ){
    if ((playsData[2] === 'O') && (playsData[5] === 'O')&&(playsData[8] ==='O')){
         console.log('Player one is the winner on column 3');
          gameOver = true;
          winnerIndex = [3,6,9];
    }else if ((playsData[0] === 'O') && (playsData[4] === 'O')&&(playsData[8] ==='O')){
         console.log('Player one is the winner on cross 1');
          gameOver = true;
          winnerIndex = [1,5,9];
    }else if ((playsData[6] === 'O') && (playsData[7] === 'O')&&(playsData[8] ==='O')){
         console.log('Player one is the winner on row 3');
          gameOver = true;
          winnerIndex = [7,8,9];
    }
  }else if (playerID === 1){
    if ((playsData[2] === 'X') && (playsData[5] === 'X')&&(playsData[8] ==='X')){
         console.log('Player two is the winner on column 3');
          gameOver = true;
          winnerIndex = [3,6,9];
    }else if ((playsData[0] === 'X') && (playsData[4] === 'X')&&(playsData[8] ==='X')){
         console.log('Player two is the winner on cross 1');
          gameOver = true;
          winnerIndex = [1,5,9];
    }else if ((playsData[6] === 'X') && (playsData[7] === 'X')&&(playsData[8] ==='X')){
         console.log('Player two is the winner on row 3');
          gameOver = true;
          winnerIndex = [7,8,9];
  }  
  }
 }
//END OF CHECK WINNER
}


//handle popup windows events,handle cancel button on the right top,handle reset button 
$(document).ready(function(){
    $("#reset_button").click(function(){
      gameReset();
    });
});
//show the pop up window by setting display and visibiliy
function showpopup(){
  if (playerID === 1){
   $("#info_text").html("HOORAY! " + playerName[0] + " IS THE WINNER!!! CLICK 'PLAY AGAIN FOR ANOTHER ROUND!'");
  }else{
    $("#info_text").html("HOORAY! " + playerName[1] + " IS THE WINNER!!! CLICK 'PLAY AGAIN FOR ANOTHER ROUND!'");
  }
   $("#popup_box").fadeToggle();    //make the window fade in
   $("#popup_box").css({"visibility":"visible","display":"block"});
   $('button').prop('disabled',true);
}
//handle cancel button to close brower window when clicked
$(document).ready(function(){
  $("#cancel_button").click(function(){
     window.close();
  });
});
//hide the pop up window and initialize the game 
function gameReset(){
   $("#popup_box").fadeToggle();
   $("#popup_box").css({"visibility":"hidden","display":"none"});
  //reset to default
   initialGame();
}
//handle draw game poppu window events
$(document).ready(function(){
  $("#draw_reset_button").click(function(){
    drawGameReset();
  });
});

//show pop up window when there is a draw
function endDrawGame(){
   $("#draw_popup_box").fadeToggle();    //make the window fade in
   $("#draw_popup_box").css({"visibility":"visible","display":"block"});
   $('button').prop('disabled',true);
}
//hide the draw gamepop up window and initialize the game 
function drawGameReset(){
   $("#draw_popup_box").fadeToggle();
   $("#draw_popup_box").css({"visibility":"hidden","display":"none"});
  //reset to default
   initialGame();
}
//handle draw game cancel button to close brower window when clicked
$(document).ready(function(){
  $("#draw_cancel_button").click(function(){
     window.close();
  });
});

