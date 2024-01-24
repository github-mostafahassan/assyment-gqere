

$(".plock").click(function(){
    $("aside").animate({left : "-25%"} , 1000 )

    
})

$(".open").click(function(){
    $("aside").animate({left : "0"} , 1000)
})




let paragraf = document.querySelector(".text-1");
let paragraf1 = document.querySelector(".text-2")
let paragraf2 = document.querySelector(".text-3")
let paragraf3 = document.querySelector(".text-4")




$(" .click-1").click(function () {
    $(".text-1").toggle(800)
})


$(" .click-2").click(function () {
    $(".text-2").toggle(800)
})

$(" .click-3").click(function () {
    $(".text-3").toggle(800)
})


$(" .click-4").click(function () {
    $(".text-4").toggle(800)
})




function clock() {

    function hourTaim() {

        var hour = document.querySelector(".hour");
    
        var getDeta = new Date();
    
        hour.innerHTML = getDeta.getHours() + " H"
        
    }



function mainetTaim() {

    var minet = document.querySelector(".minet");

    var getDeta = new Date();

    minet.innerHTML = getDeta.getMinutes() + " M"
    
}

function secondTaim() {

    var second = document.querySelector(".second");

    var getDeta = new Date();

    second.innerHTML = getDeta.getSeconds() + " S"


    
}

hourTaim()

mainetTaim()

secondTaim()

}

clock()

window.onload = function(){
        

    setInterval(clock , 500 )
}