var condition = 1; // valeur qui évite le spam sur le traitement de keydown
//condition de fin de jeu
var endGame = 0;// valeur qui fixe la fin du jeu
function hurrySound(){
            $("#soundtrack")[0].pause();
            $("#hurry_sound")[0].play();
            setTimeout('$("#hurry_sound")[0].pause();', 2499);
            setTimeout('$("#hurry_soundtrack")[0].play();', 2500);
        }
var condition = 0;

function forward(condition){
    if(condition == 1){
        $(".character img").attr('src', '/img/Mario.gif');
    }
        $(".character")
            .css({transform: 'rotateY(360deg)'})
            .animate({left: '+=5'}, 5 , "linear");
}

function backward(condition, charPos){
    if(condition == 1){
        $(".character img").attr('src', '/img/Mario.gif');
    }
     if(charPos.left > 0 ){
         $(".character")
            .attr('src','/img/Mario.gif')
            .css({transform: 'rotateY(180deg)'})
            .animate({left: '-=5'}, 5, "linear");
     }
}

function jump(condition){
    if(condition == 1 && endGame == 0){
        $(".character img").attr('src', '/img/MarioJumping.png');
        $("#jump_sound")[0].pause();
        $("#jump_sound")[0].currentTime = 0;
        $(".character").animate({"top": "-=15%"}, 200, "linear");
        $(".character").animate({"top": "+=15%"}, 200, "linear");
        $("#jump_sound")[0].play();
        setTimeout('$(".character img").attr("src", "/img/MarioStanding.jpg")',200);    
    }
}

function death(){
        $("#soundtrack")[0].pause();
        $("#hurry_soundtrack")[0].pause();
        $("#death_sound")[0].play();
        $(".character img").attr('src', '/img/MarioDeath.png');
        $("#jump_sound")[0].currentTime = 0;
        $(".character").animate({"top": "-=10%"}, 1000, "linear");
        $(".character").animate({"top": "+=100%"}, 1000, "linear");
        endGame = 1;
        
}

function game(){
        $(document).keydown(function(event){
            var charPos= $('.character').position();
            if (event.keyCode == '39') {
                if((charPos.left >= 0 && charPos.left <= 230) || $('#background').css('left') == "-5555px"){
                    if(($('#background').css('left') == "-5555px") && charPos.left == 280){
                        $("#hurry_soundtrack")[0].pause();
                        $("#ending_sound")[0].play();
                        $(".character").hide();
                        $(".win").show();
                        endGame = 1;
                        
                        
                    }
                    else{
                        forward(condition);
                    }
                }
                else{
                    $("#background").animate({left:'-=5'},1);
                    if( condition == 1){
                        $(".character img").attr('src', '/img/Mario.gif');
                    }
                }            
            }

            if (event.keyCode == '37') {
                backward(condition, charPos);
            }

            if (event.keyCode == '38'){
                jump(condition)
            }
            condition = 0;

        })

        //gestion de la fin de déplacement
        $(document).keyup(function(event){
            if (event.keyCode == '39') {
               $(".character img").attr('src', '/img/MarioStanding.jpg');
            }

            if (event.keyCode == '37') {
                $(".character img")
               .attr('src', '/img/MarioStanding.jpg');
            }
            condition = 1;
        })
        console.log($("body").attr('endGame'));

}
