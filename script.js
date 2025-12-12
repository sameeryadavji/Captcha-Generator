
let capter = document.querySelector("#capter");
let inputbox = document.querySelector("input");
let btn = document.querySelector("button#Check");
let refresh = document.querySelector("button#refresh");





let arraynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f', '@'];

let i = 0;
let captertext = "";
while (i < 6) {
    captertext = captertext + arraynumber[Math.floor(Math.random() * 23)];
    i++;
}
// capter.innerHTML = captertext;
refresh.addEventListener("click", function () {
    captertext = "";
    let i=0;
    while (i < 6) {
        captertext = captertext + arraynumber[Math.floor(Math.random() * 23)];
        i++;
    }
    capter.innerHTML = captertext;
})
btn.addEventListener("click", function () {
    inputbox.value == captertext ? alert("valid") : alert("invalid")
})