var counter1 = document.querySelector(".c221>h1");
var counter2 = document.querySelectorAll(".sc>h1");
let count=0;

setInterval(() => {
    if (count<=12) {
        counter1.innerHTML = count;
        count++;
    }
}, 250);