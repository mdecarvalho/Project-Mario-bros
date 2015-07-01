$(document).ready(function(){
    
        $(document).keydown(function(event){
            if (event.keyCode == '39') {
               $(".character")
                   .attr('src','/img/Mario.gif')
                   .css({transform: 'rotateY(360deg)'})
                   .animate({left: '+=5'}, 10);
                
                
           }
            
            if (event.keyCode == '37') {
               $(".character")
                   .attr('src','/img/Mario.gif')
                   .css({transform: 'rotateY(180deg)'})
                   .animate({left: '-=5'}, 10);
                
                
           }
        })
        $(window).keyup(function(event){
            if (event.keyCode == '39') {
               $(".character").attr('src','/img/MarioStanding.jpg');
               
           }
            
            if (event.keyCode == '37') {
               $(".character")
               .attr('src','/img/MarioStanding.jpg');
               
           }
        })
        
        
        

});