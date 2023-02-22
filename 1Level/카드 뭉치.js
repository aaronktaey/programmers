function solution(cards1, cards2, goal) {
    var answer = 'Yes';

    while(goal.length !== 0){
        if(goal[0] === cards1[0]){
            goal.shift();
            cards1.shift();
        }else if(goal[0] === cards2[0]){
            goal.shift();
            cards2.shift();
        }else{
            answer = 'No';
            break;
        }
    }
    return answer;
}

let input1 = ["i", "drink", "water"];
let input2 = ["want", "to"];
let input3 = ["i", "want", "to", "drink", "water"];
let input4 = '';

solution(input1, input2, input3, input4);