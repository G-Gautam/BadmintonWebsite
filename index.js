// Add active class to the current button (highlight it
window.onload = function(){
var btns = document.getElementsByClassName('link');
console.log(btns.length);
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
}