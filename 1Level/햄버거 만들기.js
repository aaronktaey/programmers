function solution(input1, input2, input3, input4) {
    var answer = 0;
    let temp = [];

    input1.forEach(el => {

        temp.push(el);

        if(temp[temp.length-4] === 1 && temp[temp.length-3] === 2 && temp[temp.length-2] === 3 && temp[temp.length-1] === 1 ){
            temp.pop();
            temp.pop();
            temp.pop();
            temp.pop();
            answer++;
        }
        
    });

    return answer;
}

let input1 = [2, 1, 1, 2, 3, 1, 2, 3, 1]	;
let input2 = '';
let input3 = '';
let input4 = '';

solution(input1, input2, input3, input4);