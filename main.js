function MoveYes()
{
    var ValueTop =document.getElementById("btnNo").style.top = (Math.random() * ( 90 -1 ) +1 ) +"%";
    var Valueleft = document.getElementById("btnNo").style.left = (Math.random() * ( 90 -1 ) +1 ) +"%";
}
function EventbtnYes()
{
    document.getElementById("demo").innerHTML = "I Love You Too";
}