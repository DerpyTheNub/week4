const randomNumberArea = document.querySelector("#nbr");
const randomBtn = document.querySelector("#generateRandomBtn");
const feedbackArea = document.querySelector("#feedbackArea");

randomBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * (11 - 1) + 1);
    // console.log(randomNumber)
    feedbackArea.innerHTML = "Output"
    randomNumberArea.innerHTML = randomNumber

    incEltNbr("nbr");
    
});


// Increase Number animation by Jacob Duvander
// https://codepen.io/duvander/pen/KXOpXw

var speed = 33;

/* Call this function with a string containing the ID name to
* the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
elt = document.getElementById(id);
endNbr = Number(document.getElementById(id).innerHTML);
incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
    incNbrRec(i + 1, endNbr, elt);
    }, speed);
}
}




