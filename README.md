# ttt.github.io
project Tic Tak Toe
<p1>General Description</p1>
<ul>
<li>1.This is a web appplication deployed on github.</li>
<li>2.The application utilizes HTML, CSS and JavaScript. It maily uses jQuery for DOM manilpulation. </li>
<li>3.Semantic markup for HTML and CSS are used through the codes. </li>
<li>4.A game board with grid of 9 blocks is drawed for the game. </li>
<li>5.The game is designed for two players, while players' name will be required before starting the game. Players' name will be displayed acordingly whild playing. </li>
<li>6.Counter is set and display for calculating how many round player wins.</li>
<li>7.On the end of the game, dialog window will be pop up decide whether playing againg or closing the window. </li>
<li>8.When the winning side appears, the result will be highlighted visually and the winning combination will be shown as well. </li>
<li>9.To play game, please visit: http://bonogit.github.io/</li>
</ul>
<p1>Main function List</p1>
<ul>
<li>initialGame : set all the variables, buttons and layout back to default value</li>
<li>playGame : when player click the button, this function to handle all the actions accordingly </li>
<li>endGame :  close the game by poping up windows and set up the visual indicators</li>
<li>checkWinner : everytime when the button is clicked by the player, this function will compare the value stored in playData to judge if there is a winner and return the result to playGame</li>
<li>showPopup : show the pop up window by making it display when there is a winner</li>
<li>gameReset : repond to reset button in the pop up for re-initiate the game</li>
<li>endDrawGame : show the pop up window when the game is draw</li>
<li>drawGameReset : repond to reset button in the pop up for re-initiate the game </li>
</ul>
<p1>Variable List</p1>
<ul>
<li>playsData : array for storing the data in every button</li>
<li>winnerIndex : array for storing index of winning buttons </li>
<li>playerID :  number for storing who is playing</li>
<li>gameOver : a flag to indicate the game status</li>
<li>counter : counter for counting how many moves</li>
<li>playName : array for storing the player names </li>
<li>winnerCounter : numbers in array to store each players' winning rounds</li>
</ul>









