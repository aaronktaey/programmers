function solution(input1, input2, input3, input4) {
    var answer = '';
    let mbti = new Map();
    mbti.set(1,0);
    mbti.set(2,0);
    mbti.set(3,0);
    mbti.set(4,0);
    for(let i = 0; i < input1.length ; i ++){
        let category = input1[i][0];
        let selection = input2[i] - 4;
        if(category === 'R'){
            mbti.set(1, mbti.get(1) + selection)
        }else if(category === 'T'){
            mbti.set(1, mbti.get(1) - selection)
        }else if(category === 'C'){
            mbti.set(2, mbti.get(2) + selection)
        }else if(category === 'F'){
            mbti.set(2, mbti.get(2) - selection)
        }else if(category === 'J'){
            mbti.set(3, mbti.get(3) + selection)
        }else if(category === 'M'){
            mbti.set(3, mbti.get(3) - selection)
        }else if(category === 'A'){
            mbti.set(4, mbti.get(4) + selection)
        }else if(category === 'N'){
            mbti.set(4, mbti.get(4) - selection)
        }
    }
    console.log(mbti);
    answer += mbti.get(1) <= 0 ? 'R' : 'T';
    answer += mbti.get(2) <= 0 ? 'C' : 'F';
    answer += mbti.get(3) <= 0 ? 'J' : 'M';
    answer += mbti.get(4) <= 0 ? 'A' : 'N';
    console.log(answer);
    

    return answer;
}

let input1 = ["AN", "CF", "MJ", "RT", "NA"];
let input2 = [5, 3, 2, 7, 5];
let input3 = '';
let input4 = '';

solution(input1, input2, input3, input4);