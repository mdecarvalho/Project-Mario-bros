$(document).ready(function(){
        game();
        if(endGame != 0){
            setTimeout(hurrySound, 1000);
            setTimeout(death, 1000);
            $(".win").show();
        }
});