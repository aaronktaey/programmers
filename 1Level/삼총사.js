function solution(input1, input2, input3, input4) {
    var answer = '';

    for(let a = 0 ; a < input1.length ; a ++){
        for(let b = a+1 ; b < input1.length ; b ++){
            for(let c = b+1 ; c < input1.length ; c ++){
                if(input1[a]+input1[b]+input1[c] === 0) answer ++;
            }
        }
    }    
    console.log(answer)
    return answer;
}

let input1 = [-3, -2, -1, 0, 1, 2, 3];
let input2 = '';
let input3 = '';
let input4 = '';

solution(input1, input2, input3, input4);