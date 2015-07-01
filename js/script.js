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
    } 
    function backward(condition){
        if(condition == 1){
        $(".character img").attr('src','/img/Mario.gif');
        }
        $(".character")
        .attr('src','/img/Mario.gif')
        .css({transform: 'rotateY(180deg)'})
        .animate({left: '-=5'}, 5, "linear");
    }
    function jump(condition){
        if(condition == 1){
            $(".character").animate({"top": "-=15%"}, 300, "linear");
            $(".character").animate({"top": "+=15%"}, 300, "linear");
            $("#jump_sound")[0].play();
        }
    }
    
    
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
    
        
    $(document).keyup(function(event){
        if (event.keyCode == '39') {
           $(".character img").attr('src','/img/MarioStanding.jpg');
        }

        if (event.keyCode == '37') {
            $(".character img")
           .attr('src','/img/MarioStanding.jpg');   
        }
        if (event.keyCode == '37') {
            $("#jump_sound")[0].pause();
        }
        condition = 1;
    })
});