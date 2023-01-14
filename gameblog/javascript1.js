
autoSlider();
var left = 0;
var timer;

function autoSlider(){
 timer = setTimeout(function (){
    var polosa = document.getElementById('polosa');
    left = left - 225;
    if (left < -900)  {   
    left = 0;
    clearTimeout(timer);
    }
    polosa.style.left = left + 'px';
    autoSlider();

 },  7000);
}


$(document).ready(function(){
    getRate();
});

function getRate(){
    
    $.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json",
        function(data){
            data = JSON.parse(data);
            console.log(data);
            
        }
    );

}

/*document.oncontextmenu = function(){
    return false;
}*/
