function solution(input1, input2, input3, input4) {
    var answer = '';

    for(let i = 1 ; i < input1.length ; i ++){
        console.log(i,'번 째 반복...');
        console.log('이번 값',input1[i]);
        console.log('각자 먹을 양',~~(input1[i]/2));
        if(~~(input1[i]/2) === 0){
            continue;
        }else{
            answer += i.toString().repeat(~~(input1[i]/2));
        }
    }
    console.log(answer+0+[...answer].reverse().join(''));

    return answer+0+[...answer].reverse().join('');
}

let input1 = [1, 7, 1, 2];
let input2 = '';
let input3 = '';
let input4 = '';

solution(input1, input2, input3, input4);