$(document).ready(function(){
    var condition = 1; // valeur qui évite le spam sur le traitement de keydown
    
    function forward(condition){
        if(condition == 1){
            $(".character img").attr('src','/img/Mario.gif');
        }   
        $(".character")
        .attr('src','/img/Mario.gif')
        .css({transform: 'rotateY(360deg)'})
        .animate({left: '+=5'}, 5 , "linear");
        $("#background").animate({left:'-=5'},1);
    } 
    function backward(condition){
        if(condition == 1){
        $(".character img").attr('src','/img/Mario.gif');
        }
        $(".character")
        .attr('src','/img/Mario.gif')
        .css({transform: 'rotateY(180deg)'})
        .animate({left: '-=5'}, 5, "linear");
        $("#background").animate({left:'+=5'},1);
    }
    
    function jump(condition){
        if(condition == 1){
            $("#jump_sound")[0].pause();
            $("#jump_sound")[0].currentTime = 0; 
            $(".character").animate({"top": "-=15%"}, 200, "linear");
            $(".character").animate({"top": "+=15%"}, 200, "linear");
            $("#jump_sound")[0].play();
        }
    }
    //gestion des déplacements
    $(document).keydown(function(event){
        if (event.keyCode == '39') {
           forward(condition);
        }

        if (event.keyCode == '37') {
           backward(condition);
        }
        if (event.keyCode == '38'){
            jump(condition);
        }
        condition = 0;
                
    })
    //gestion de la fin de déplacement
    $(document).keyup(function(event){
        if (event.keyCode == '39') {
           $(".character img").attr('src','/img/MarioStanding.jpg');
        }

        if (event.keyCode == '37') {
            $(".character img")
           .attr('src','/img/MarioStanding.jpg');   
        }
        condition = 1;
    })
        $(window).keyup(function(event){
            if (event.keyCode == '39') {
               $(".character img").attr('src','/img/MarioStanding.jpg');
               
           }
            
            if (event.keyCode == '37') {
               $(".character img")
               .attr('src','/img/MarioStanding.jpg');  
           }
        })
});