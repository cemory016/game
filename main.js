console.log ("i'm working")
function qANDa(A,points) {
console.log(A);
var question;
var answer;
if (A === 'c1q1'){
    question = "____'s the way (uh huh, uh huh) I like it";
    answer = "that";
}
if (A === 'c1q2'){
    question = "...knick-knack paddywhack, give the dog a bone, ____ old man came rolling home";
    answer = "this";
}
     prompt2 = prompt (question);
    if (prompt2 === answer) {
        document.getElementById(A).innerHTML =
        "correct";
        //add points
    } else{
        document.getElementById(A).innerHTML =
        "wrong sucka";
        //subtract points
    };
    //with one player, gray out box and make not clickable after question has been completed.
}
//     function qANDa() {
//     var answer2 = prompt("...knick-knack paddywhack, give the dog a bone, ____ old man came rolling home");
//     if (answer2 === "this") {
//         document.getElementById("answer2").innerHTML =
//         "correct";
//     } else{
//         document.getElementById("answer2").innerHTML =
//         "next player";
//     };
// }

    // var answer3 = prompt("All ____");
    // if (answer3 === "that") {
    //     document.getElementById("answer3").innerHTML =
    //     "correct";
    // } else{
    //     document.getElementById("answer3").innerHTML =
    //     "next player";
    // };
    // var answer4 = prompt("To be, or not to be, ____ is the question...");
    // if (answer4 === "that") {
    //     document.getElementById("answer4").innerHTML =
    //     "correct";
    // } else{
    //     document.getElementById("answer4").innerHTML =
    //     "next player";
    // };
    // var answer5 = prompt("Th-th-th-____'s all folks!");
    // if (answer5 === "that") {
    //     document.getElementById("answer5").innerHTML =
    //     "correct";
    // } else{
    //     document.getElementById("answer5").innerHTML =
    //     "next player";
    // };
    //     var answer6 = prompt("____'s the way (uh huh, uh huh) I like it");
    //     if (answer6 === "that") {
    //         document.getElementById("answer6").innerHTML =
    //         "correct";
    //     } else{
    //         document.getElementById("answer6").innerHTML =
    //         "next player";
    //     };
    //     var answer7 = prompt("...knick-knack paddywhack, give the dog a bone, ____ old man came rolling home");
    //     if (answer7 === "this") {
    //         document.getElementById("answer7").innerHTML =
    //         "correct";
    //     } else{
    //         document.getElementById("answer7").innerHTML =
    //         "next player";
    //     };
    //     var answer8 = prompt("All ____");
    //     if (answer8 === "that") {
    //         document.getElementById("answer8").innerHTML =
    //         "correct";
    //     } else{
    //         document.getElementById("answer8").innerHTML =
    //         "next player";
    //     };
    //     var answer9 = prompt("To be, or not to be, ____ is the question...");
    //     if (answer9 === "that") {
    //         document.getElementById("answer9").innerHTML =
    //         "correct";
    //     } else{
    //         document.getElementById("answer9").innerHTML =
    //         "next player";
    //     };
    //     var answer10 = prompt("Th-th-th-____'s all folks!");
    //     if (answer10 === "that") {
    //         document.getElementById("answer10").innerHTML =
    //         "correct";
    //     } else{
    //         document.getElementById("answer10").innerHTML =
    //         "next player";
    //     };
    
