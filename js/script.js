$(document).ready(function(){
    
        $(document).keydown(function(event){
            if (event.keyCode == '39') {
               $(".character")
                   .attr('src','/img/Mario.gif')
                   .css({transform: 'rotateY(360deg)'})
                   .animate({left: '+=5'}, 10);
               $(".character img").attr('src','/img/Mario.gif');
           }
            
            if (event.keyCode == '37') {
               $(".character")
                   .css({transform: 'rotateY(180deg)'})
                   .animate({left: '-=5'}, 10);
                $(".character img").attr('src','/img/Mario.gif');
                
           }
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