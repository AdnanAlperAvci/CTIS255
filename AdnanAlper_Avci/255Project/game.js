$(function(){
var timer = setInterval(decCounter, 1000) ;
var timer2=setInterval(decCount,1000);
// persistent storage
let counter = 10 ;
let count =3;
$("#count").text(count);
function decCount() {
    var count = parseInt($("#count").text()) ;
    if(count>0)count-- ;
    localStorage.setItem("count", count)
    $("#count").text(count)

    if(count===0){
    $("#msg").css("visibility","visible");
    $("#field").css("visibility","visible");
    $("#cnt").css("visibility","hidden");
    
    $("#counter").text(counter) ;
    var counter = parseInt($("#counter").text()) ;
    if(counter>0)counter-- ;
    localStorage.setItem("counter", counter)
    $("#counter").text(counter)
    if(counter<9)
    $("#msg").css("visibility","hidden");


    }
}

function decCounter() {
    

}
})