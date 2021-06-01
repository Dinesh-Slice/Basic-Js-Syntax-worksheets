// Card Counting for Blackjack 

/*
---------------------------------
    +1  | 2, 3, 4, 5, 6
---------------------------------
    0   | 7, 8, 9
---------------------------------
    -1  | 10, 'J', 'Q', 'K', 'A'
---------------------------------
*/ 

function countCard(card){

    switch(card){
        case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;  

    }

    if (count > 0){
        return count + " Bet"; 
    } else {return count + " Hold"}

}

// Sample test: 
// cc(2); cc(3); cc(4); cc(5); cc(6);  

// Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet