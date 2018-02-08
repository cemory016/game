console.log ("i'm working")

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
        question = "I'm as mad as hell, and I'm not going to take ____ anymore!";
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
    //catagoty 3
    if (A === 'c3q1'){
        question = "Which is the only American state to begin with the letter 'p'?";
        answer = " Pennsylvania";
    }
    if (A === 'c3q2'){
        question = "Name the world's biggest island";
        answer = "Greenland";
    }
    if (A === 'c3q3'){
        question = "Name the world's largest ocean.";
        answer = "Pacific";
    }
    if (A === 'c3q4'){
        question = "rounding up, the diameter of Earth is ____ miles.";
        answer = "8000";
    }
    if (A === 'c3q5'){
        question = "Prague is in which country?";
        answer = "Czech Republic";
    }
    // Catagory 4
    if (A === 'c4q1'){
        question = "This colour jersey is worn by the winners of each stage of the Tour De France";
        answer = "yellow";
    }
    if (A === 'c4q2'){
        question = "This chess piece can only move diagonally?";
        answer = "bishop";
    }
    if (A === 'c4q3'){
        question = "How many holes are there in a full round of golf?";
        answer = "18";
    }
    if (A === 'c4q4'){
        question = "In 2011, which country hosted a Formula 1 race for the first time?";
        answer = "India";
    }
    if (A === 'c4q5'){
        question = "the only athlete ever to play in a Super Bowl and a World Series?";
        answer = "Deion Sanders";
    } 
    // catagory 5
    if (A === 'c5q1'){
        question = "This actor played Neo in The Matrix";
        answer = "Keanu Reeves";
    }
    if (A === 'c5q2'){
        question = "In which film did Humphrey Bogart say, `We'll always have Paris?`";
        answer = "Casablanca";
    }
    if (A === 'c5q3'){
        question = "The film noir actress who starred in I Married a Witch, The Glass Key, So Proudly We Hail! and Sullivan's Travels";
        answer = "Veronica Lake";
    }
    if (A === 'c5q4'){
        question = "Name the director of the Lord of the Rings trilogy.";
        answer = "Peter Jackson";
    }
    if (A === 'c5q5'){
        question = "Name the actress whose career began at the age of 3, and who went on to star in films such as Contact, Maverick and The Silence of the Lambs?";
        answer = "Jodie Foster";
    }
   if (A === 'finalQ')
        question =
        answer =
}


    userAnswer = prompt (question);
    if (userAnswer === answer) {
        document.getElementById(A).innerHTML=        "correct";
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