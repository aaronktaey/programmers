function solution(input1, input2, input3, input4) {
    var answer = '';
    let totalIron = 0;

    for(let i = 1 ; i <= input1 ; i ++){
        let iron = 0;
        for(let j = 1 ; j <= Math.sqrt(i) ; j ++){
            if(i % j === 0 && j !== Math.sqrt(i)){
                iron += 2;
            } else if(j === Math.sqrt(i)){
                iron += 1; 
            } 
            console.log(i,'번째 기사 의 철 무게 : ',iron);
        }
        iron <= input2 ? totalIron += iron : totalIron += input3;
        console.log('totalIron :', totalIron);
    }
    console.log(totalIron);
    return answer;
}

let input1 = 5;
let input2 = 3;
let input3 = 2;
let input4 = '';

solution(input1, input2, input3, input4);