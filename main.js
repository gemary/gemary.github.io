function MoveYes()
{
    var ValueTop =document.getElementById("btnNo").style.top = (Math.random() * ( 90 -1 ) +1 ) +"%";
    var Valueleft = document.getElementById("btnNo").style.left = (Math.random() * ( 90 -1 ) +1 ) +"%";
}
function EventbtnYes()
{
  document.getElementById("demo1").innerHTML = "Còn không thì Nói Mị 1 tiếng!";
    document.getElementById("demo").innerHTML ="Nếu cảm thấy mình bị ép buộc thì im luôn há";
}