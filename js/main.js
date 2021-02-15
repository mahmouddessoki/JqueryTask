
let myTextArea = document.querySelector("textarea")
let counter = Number($(".counter").text())
let navWidth = $(".navigation").outerWidth(true)
let openWidth = $(".toggleTag").outerWidth(true)


$(".toggleTag").css("left","0")
$(".navigation").css(`left`,`-${navWidth}`)

$(".toggleTag span").click(function(){
    $(".toggleTag").animate({left:openWidth},500)
    $(".navigation").animate({left:"0"},500)
    $(".navigation").css("position","fixed")

})

$(".closenav").click(function(){
    $(".toggleTag").animate({left:"0"},500)
    $(".navigation").animate({left:`-${navWidth}`})
})

$(".first").slideDown();

$(".singer").click(function(){
    let next = $(this).next();
    next.slideToggle(500);
    $(".singerP").not(next).slideUp(500)

})

myTextArea.addEventListener("keyup",function(e){

    
    let currentLength = this.value.length;

   if(e.code === "Backspace" )
    {
        
        if(counter < 100)
        {
            counter = 100-currentLength;
        }
    }
    else
    {

        counter = 100-currentLength;
        
    }

    if(counter <= 0)
    {
        $(".counter").text("your available character finished")
    }
    else
    {
        $(".counter").text(counter)
    }

})



$("a[href^='#']").click(function(){
    let currentSectionID = $(this).attr("href"),
        sectionTop = $(currentSectionID).offset().top
    
  $("html, body").animate({scrollTop: sectionTop},1000)
    


})
let countDownDate = new Date("12/17/2033").getTime();
function countDown()
{
    let currentDate = new Date().getTime()
    
    let remaining = countDownDate - currentDate;
    

    let days = Math.floor(remaining/(1000*60*60*24)),
        hours = Math.floor((remaining % (1000*60*60*24))/(1000*60*60))
        minutes = Math.floor(((remaining % (1000*60*60*24))%(1000*60*60))/(1000*60))
        seconds = Math.floor((((remaining % (1000*60*60*24))%(1000*60*60))%(1000*60))/(1000))
    
    if(hours < 10)
        hours = "0" + hours
    if(minutes < 10)
        minutes = "0" + minutes
    if(seconds < 10)
        seconds = "0" + seconds

    
    $(".days").text(days + "D")
    $(".hours").text(hours + "H")
    $(".minutes").text(minutes + "M")
    $(".seconds").text(seconds + "S")

    if(remaining < 0)
    {
        clearInterval(timeProgressing)

    }
}
var timeProgressing = setInterval(countDown,1000)

/**form validation */
$("input").keyup((e)=>{
    if($(e.target).attr("type")==="text" ){
        if(/^[A-z]{3,20}/.test($(e.target).val()))
        {
            $(e.target).next().addClass("d-none")
        }
        else{
            $(e.target).next().removeClass("d-none")
        }
    }
    else{
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/.test($(e.target).val()))
        {
            $(e.target).next().addClass("d-none")
        }
        else{
            $(e.target).next().removeClass("d-none")
        }
    }
})


