var condition = 1; // valeur qui évite le spam sur le traitement de keydown
var dead = 0;
function hurrySound(){
    $("#soundtrack")[0].pause();
    $("#hurry_sound")[0].play();
    setTimeout('$("#hurry_sound")[0].pause();', 2499);
    setTimeout('$("#hurry_soundtrack")[0].play();', 2500);
}


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
    if(condition == 1){
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
        $("#soundtrack").remove();
        $("#hurry_soundtrack").remove();
        $("#jump_sound").remove();
        $("#death_sound")[0].play();
        $(".character img").attr('src', '/img/MarioDeath.png');
        $("#jump_sound")[0].currentTime = 0;
        $(".character").animate({"top": "-=10%"}, 1000, "linear");
        $(".character").animate({"top": "+=100%"}, 1000, "linear");
        $(".gameOver").show();
        setTimeout('$(".character").remove()', 2000);
        dead = 1;
}  

function game(){
    $(document).keydown(function(event){
        var charPos= $('.character').position();
        if (event.keyCode == '39') {
            if((charPos.left >= 0 && charPos.left <= 230 && dead == 0) || $('#background').css('left') == "-5555px"){
                //fin de la map
                if(($('#background').css('left') == "-5555px") && charPos.left == 280){
                    $("#soundtrack")[0].pause();
                    $("#hurry_soundtrack")[0].pause();
                    $("#ending_sound")[0].play();
                    $(".character").hide();
                    $("character").remove();
                    $("#death_sound").remove();
                    $(".win").show();
                    $(".timer").hide();  
                }
                else{
                    forward(condition);
                }
            }
            else{
                // défilement du background au lieu du personnage lorsqu'il arrive au centre de l'écran
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
}

var sec = 50;
var timer = setInterval(function() { 
   $('.timer').text("Time: " + sec--);
   if (sec == -1) {
      $('.timer').fadeOut('fast');
      clearInterval(timer);
   } 
}, 1000);

