//side nav section
$(".open").click(function () { 
    $(".navbar").animate({left : "0px"}, {duration : 1000, queue : false})
    $(".open").animate({left : "20%"}, {duration : 1000, queue : false})
    $(".header").animate({paddingLeft: "150px"}, {duration : 1000, queue : false},)
    $(".navbar a").animate({opacity : "1"}, 2000 );
    $(".closebtn").animate({top :"5px"}, {duration : 1000, queue : false});
 });
 $(".closebtn").click(function () { 
    $(".navbar").animate({left : "-250px"}, {duration : 1000, queue : false})
    $(".open").animate({left : "0%"}, {duration : 1000, queue : false})
    $(".header").animate({paddingLeft: "0px"}, {duration : 1000, queue : false})
    $(".navbar a").animate({opacity : "0"}, 1000 );
    $(".closebtn").animate({top :"-100px"}, {duration : 1000, queue : false});
 });

// details section
$("h3").click(function () { 
    $(this).next().slideToggle(1000)
    $(".details div").not($(this).next()).slideUp(1000);
});

// countDown section
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var countDownNew = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days + "d " 
  document.getElementById("hours").innerHTML = hours + "h "
  document.getElementById("minutes").innerHTML = minutes + "m "  
  document.getElementById("seconds").innerHTML = seconds + "s ";

  if (distance < 0) {
    clearInterval(countDownNew);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//contact us
var max = 100;
$(".form textarea").keyup(function(){ 
  var decreament = --max ;
  if(max<=0){
   document.getElementById("char").innerHTML = "your available character finished "
  }else{
    document.getElementById("char").innerHTML = decreament
  }
});

$("a").click(function(){   
  var sectionId= $(this).attr("href");
  var positionOfSection = $(sectionId).offset().top;
  $("html , body").animate({scrollTop:positionOfSection},1000);
})