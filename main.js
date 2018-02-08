console.log ("i'm working")


const gameBoardInfo = {
    'c1q1': {
        question: "____'s the way (uh huh, uh huh) I like it",
        correctAnswer: "that",
        pointValue: 100
    },
     'c1q2': {
        question: "...knick-knack paddywhack, give the dog a bone, ____ old man came rolling home",
        correctAnswer: "this",
        pointValue: 200
    },
    'c1q3': {
        question: "Walk ____ Way",
        correctAnswer: "this",
        pointValue: 300
     },
     'c1q4': {
        question: "I'm as mad as hell, and I'm not going to take ____ anymore!",
        correctAnswer: "this",
        pointValue: 400
    },
    'c1q5': {
        question: "____ Old Black Magic",
        correctAnswer: "that",
        pointValue: 500
     },
    'c2q1': {
        question: "sushi is traditionally wrapped in",
        correctAnswer: "seaweed",
        pointValue: 100
    },
     'c2q2': {
        question: "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of ___",
        correctAnswer: "apples",
        pointValue: 200
    },
    'c2q3': {
        question: "If you had Lafite-Rothschild on your dinner table, what would it be?",
        correctAnswer: "wine",
        pointValue: 300
     },
     'c2q4': {
        question: "Costing around $2,600 per pound and made only to order by Knipschildt, what is the name of this chocolate truffle?",
        correctAnswer: "chocopologie",
        pointValue: 400
    },
    'c2q5': {
        question: "It takes about 75,000 crocuts flowers to make a pound of this spice.",
        correctAnswer: "saffron",
        pointValue: 500
     },
     //Category 3
    'c3q1': {
        question: "Which is the only American state to begin with the letter `p`?",
        correctAnswer: "Pennsylvania",
        pointValue: 100
    },
     'c3q2': {
        question:"Name the world's biggest island",
        correctAnswer: "Greenland",
        pointValue: 200
    },
    'c3q3': {
        question:"Name the world's largest ocean.",
        correctAnswer: "Pacific",
        pointValue: 300
     },
     'c3q4': {
        question:"rounding up, the diameter of Earth is ____ miles.",
        correctAnswer: "8000",
        pointValue: 400
    },
    'c3q5': {
        question:"Prague is in which country?",
        correctAnswer: "Czech Republic",
        pointValue: 500
     },
     //Catagory 4
    'c4q1': {
        question:"This colour jersey is worn by the winners of each stage of the Tour De France",
        correctAnswer: "yellow",
        pointValue: 100
    },
     'c4q2': {
        question:"This chess piece can only move diagonally?",
        correctAnswer: "bishop",
        pointValue: 200
    },
    'c4q3': {
        question:"How many holes are there in a full round of golf?",
        correctAnswer: "18",
        pointValue: 300
     },
     'c4q4': {
        question:"In 2011, which country hosted a Formula 1 race for the first time?",
        correctAnswer: "India",
        pointValue: 400
    },
    'c4q5': {
        question:"the only athlete ever to play in a Super Bowl and a World Series?",
        correctAnswer: "Deion Sanders",
        pointValue: 500
     },
     //Catagory 5
    'c5q1': {
        question:"This actor played Neo in The Matrix",
        correctAnswer: "Keanu Reeves",
        pointValue: 100
    },
     'c5q2': {
        question:"In which film did Humphrey Bogart say, `We'll always have Paris?`",
        correctAnswer: "Casablanca",
        pointValue: 200
    },
    'c5q3': {
        question:"The film noir actress who starred in I Married a Witch, The Glass Key, So Proudly We Hail! and Sullivan's Travels",
        correctAnswer: "Veronica Lake",
        pointValue: 300
     },
     'c5q4': {
        question:"Name the director of the Lord of the Rings trilogy.",
        correctAnswer: "Peter Jackson",
        pointValue: 400
    },
    'c5q5': {
        question:"Name the actress whose career began at the age of 3, and who went on to star in films such as Contact, Maverick and The Silence of the Lambs?",
        correctAnswer: "Jodie Foster",
        pointValue: 500
     },
    //  'finalQ': {
    //      question:
    //      correctAnswer:
    //      pointValue: 
    //  }

    }
// single funtion
let playerPoints = 0
function processQandA(tableId){
    questionInfo = gameBoardInfo[tableId];
    var question = questionInfo.question;
    var answer = questionInfo.correctAnswer;
    var points = questionInfo.pointValue; 
    var playerScoreHtml = document.getElementById('pointValue')
    
    userAnswer = prompt (question);
    if (userAnswer === answer) {
        document.getElementById(tableId).innerHTML =
        "correct";
        //add points 
        playerPoints += points;
        playerScoreHtml.innerHTML=playerPoints;
        
    } else{
        document.getElementById(tableId).innerHTML =
        "wrong sucka";
        //subtract points
        playerPoints -= points;
        playerScoreHtml.innerHTML=playerPoints;
    };
    
    //with one player, gray out box and make not clickable after question has been completed.
}