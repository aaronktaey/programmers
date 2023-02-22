function solution(input1, input2, input3, input4) {
    var answer = [];
    let tempArr = [];
    input2.map(el=>{
        tempArr.push(el)
        tempArr.sort((a,b)=>b-a);
        tempArr.length < input1 ? answer.push(tempArr[tempArr.length-1]) : answer.push(tempArr[input1-1]);
    });
    return answer;
}

let input1 = 3;
let input2 = [10, 100, 20, 150, 1, 100, 200]	;
let input3 = '';
let input4 = '';

solution(input1, input2, input3, input4);