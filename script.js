function showMenu(){
    document.getElementById("menu").style.marginLeft = "0px";
    document.getElementById("sec-1-left").style.filter = "blur(5px)";
    document.getElementById("sec-1-sub-sec").style.filter = "blur(5px)";
}
function hideMenu(){
    document.getElementById("menu").style.marginLeft = "-400px";
    document.getElementById("sec-1-left").style.filter = "blur(0px)";
    document.getElementById("sec-1-sub-sec").style.filter = "blur(0px)";
}