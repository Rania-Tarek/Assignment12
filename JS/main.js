$('.openNav').click(function(){
    $('.openNav').animate({left:'+=200'},500)
    $('.sidenav').animate({width:200},100)
})

$('.closebtn').click(function(){
    $('.openNav').animate({left:'-=200'},500)
    $('.sidenav').animate({width:0},100)

})

$('.toggle').click(function(){
    console.log(this);
    $(this).next().slideToggle(500); 
    $('.inner').not($(this).next()).slideUp(500);
})


window.onload = function() {
    countDownToTime("10 febraury 2024 8:42:00");
}
function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
    let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)
    setInterval(function() {  countDownToTime(countTo); }, 1000);
}


var maxLength = 100;
$('textarea').keyup(function() {
    
var length = $(this).val().length;
var AvailableLenth = maxLength-length;
if(AvailableLenth<=0)
            {
                $("#char").text("your available character finished");
            
            }
        else{
        
        $("#char").text(AvailableLenth);
        }
});




