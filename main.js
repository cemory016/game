console.log ("i'm working")


// const gameBoardInfo = [
//     'c1q1': {
//         question:
//         correctAnswer: 
//         pointValue:
//     },
//     'c1q2': {

//     }

// ]

// function processQandA(tableId){
//     questionInfo = gameBoardInfo[tableId];

//     questionInfo.question;
//     questionInfo.answer;
//     questionInfo.pointValue;
// }

let playerPoints = 0
function qANDa(A,points) {
    console.log(A);
    var question;
    var answer;
    var playerScoreHtml = document.getElementById('player-score')

    // Category 1
    if (A === 'c1q1'){
        question = "____'s the way (uh huh, uh huh) I like it";
        answer = "that";
        // playerScore += 100
        // 
    }
    if (A === 'c1q2'){
        question = "...knick-knack paddywhack, give the dog a bone, ____ old man came rolling home";
        answer = "this";
    }
    if (A === 'c1q3'){
        question = "Walk ____ Way";
        answer = "this";
    }
    if (A === 'c1q4'){
        question = "“I'm as mad as hell, and I'm not going to take ____ anymore!”";
        answer = "this";
    }
    if (A === 'c1q5'){
        question = "____ Old Black Magic";
        answer = "that";
    }
    // Catagory 2
    if (A === 'c2q1'){
        question = "sushi is traditionally wrapped in";
        answer = "seaweed";
    }
    if (A === 'c2q2'){
        question = "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of ___";
        answer = "apples";
    }
    if (A === 'c2q3'){
        question = "If you had Lafite-Rothschild on your dinner table, what would it be?";
        answer = "wine";
    }
    if (A === 'c2q4'){
        question = "Costing around $2,600 per pound and made only to order by Knipschildt, what is the name of this chocolate truffle?";
        answer = "chocopologie";
    }
    if (A === 'c2q5'){
        question = "It takes about 75,000 crocus flowers to make a pound of this spice.";
        answer = "saffron";
    }
    userAnswer = prompt (question);
    if (userAnswer === answer) {
        document.getElementById(A).innerHTML =
        "correct";
        //add points 
        playerPoints += points;
        playerScoreHtml.innerHTML=playerPoints;
        
    } else{
        document.getElementById(A).innerHTML =
        "wrong sucka";
        //subtract points
        playerPoints -= points;
        playerScoreHtml.innerHTML=playerPoints;
    };
    //with one player, gray out box and make not clickable after question has been completed.
}