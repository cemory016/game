<!-- Jeopardy User Story:
    As a player, I want to test my knowledge of a variety of topics in a fun but competitive way. 
    As a player, I want to track how well I am doing during the game via a point system. 
    As a player, I do not want to be forced to log-in to service.
    As a player, I would like to know how well I do against previous players -->

Jeopardy User Story Take Two:
    As a player, I...
        - want to face an opponent in a game of trivial knowledge (ie. Jeopardy)
        - want to see the categories and point values before the game starts so I can plan my victory 
        - want to select a category/topic and then select a point value for the difficulty of question I will be trying to answer
        - need to see my accumulative score as well as my opponent
        - would like the answers to be multiple choice
        - would like to see if I get the answer correct or incorrect
        - would like my opponent to have the chance to answer questions I get wrong (greater chance of getting the answer correct 1/3 vs 1/4)
        - should lose points if I answer a question incorrectly
        - would like the person who answered the question correctly to pick the next topic and point value
        - after 15 questions, 6000pts, or 10min I would like to move to round two
        - think round two should have more difficult questions and higher point values
        - round two should work the same as round 1, EXCEPT that, after 15 questions, 6000pts, or 10min I would like to go into the final question
        - want the topic for the final question to pop up
        - then want each player to wager points (up to as many points as they have accumlated thus far)
        - will get a chance to answer the final question 
        - want my final question answer to hide while my opponent answers the question
        - want to see the final question answer
        - want to see the final scores and name of the winning player


Psuedo Code:
    State/Calculations:
        - Player points
        - player score
        - player bet
        - game time duration


    Visual:
        - grid (6 x 5; to include catagory)
        - score board
        - player names
        - question promp
        - answer multiple choice promp

    UI/DOM/EventListners:
        - selecting a catagory value (5 x 5 grid)
        - start game
        - 
        
<!----- NOTES TO SELF:
- use a gameLoop
 - loop should iterate while there are still questions in the list
- for each iteration
    - determine whose turn is it
    - ask a question
    -then add points to that player if that player got the correct answer.
- when there are no more questions left
    - check which player has more points
    - print this player
 ----->

    


    ***** Links ******
    deployment ------ http://carmen-game-1.bitballoon.com

    trello board -------  https://trello.com/b/pF8XiqLw/boardgame
    
    wirerframes --------- see image in project folder ----