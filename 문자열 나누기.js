function solution(input1, input2, input3, input4) {
    var answer = '';
    let x = 0;
    let notX = 0;
    let char = '';

    for(let i = 0 ; i < input1.length ; i ++){
        console.log("x :",x);
        console.log("notX :",notX);
        console.log("char :",char);
        console.log("input1[i] :",input1[i]);
        console.log("answer :",answer);
        if(char === ''){
            char = input1[i];
            x++;
        }else if(char[0] === input1[i]){
            x++;
        }else{
            notX++;
        }
        if(x === notX){
            x = 0;
            notX = 0;
            char = '';
            answer ++;
        }
    }
    char === '' ? console.log(answer) : console.log(answer+1);

    return answer;
}

let input11 = 'banana';
let input12 = '';
let input13 = '';
let input14 = '';

solution(input11, input12, input13, input14);

let input21 = 'abracadabra';
let input22 = '';
let input23 = '';
let input24 = '';
