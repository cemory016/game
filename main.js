console.log ("i'm working")
function pts() {
    var questionC1 = prompt("____'s the way (uh huh, uh huh) I like it");
    if (questionC1 === "That") {
        document.getElementById("answerC1").innerHTML =
        "correct";
    } else{
        document.getElementById("answerC1").innerHTML =
        "next player";
    }
}