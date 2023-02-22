function solution(input1, input2, input3, input4) {
    var answer = 0;
    let boxTotal = ~~(input3.length / input2);
    console.log('상자 수 :',boxTotal);
    input3.sort((a,b)=>b-a); // 점수 높은 것부터 정렬
    console.log(input3);
    for(let i = 0; i < boxTotal ; i ++){
        answer += input3.slice(i*input2,(i+1)*input2)[input2-1]*input2;
    }

    console.log(answer);
    return answer;
}

let input1 = 4;
let input2 = 3;
let input3 = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
let input4 = '';

solution(input1, input2, input3, input4);