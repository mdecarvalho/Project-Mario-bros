$(document).ready(function(){
    var endGame = 0;// valeur qui fixe la fin du jeu
    endGame = game(endGame);
    if(endGame == 0){
        setTimeout(hurrySound, 35000);
        setTimeout(death, 50000);
    }
});