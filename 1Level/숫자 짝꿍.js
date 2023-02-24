function solution(input1, input2, input3, input4) {
    var answer = [];
    let short = [];
    let long = [];

    if(input1.length >= input2.length){
        short = [...input2].sort((a,b)=>b-a);
        long = [...input1].sort((a,b)=>b-a).join('');
    }else{
        short = [...input1].sort((a,b)=>b-a);
        long = [...input2].sort((a,b)=>b-a).join('');
    }
    short.map(el=>{
        if(long.length != long.replace(el,'').length){
            long = long.replace(el,'');
            answer.push(el);
        }
    })
    answer = answer.length === 0 ?  answer.join('')+'-1' : answer.join('');
    if(answer[0] === '0') answer = '0';

    console.log(answer);

    return answer;
}

let input1 = "12321";
let input2 = "42531";
let input3 = '';
let input4 = '';

solution(input1, input2, input3, input4);