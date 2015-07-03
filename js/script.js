$(document).ready(function(){
        game();
        if(endGame != 0){
            setTimeout(hurrySound, 35000);
            setTimeout(death, 50000);
        }
});