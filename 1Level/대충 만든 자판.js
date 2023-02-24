function solution(input1, input2, input3, input4) {
    var answer = [];
    let mapped = new Map();
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    input1.map((keymap,index)=>{
        input1[index] = [...keymap];
    })
    
    input1.map(keyArray=>{
        alphabet.map(char=>{
            let clickNum = keyArray.indexOf(char) + 1;
            if(clickNum != 0){
                mapped.get(char) === undefined ? mapped.set(char, clickNum) : mapped.get(char) < clickNum ? false : mapped.set(char, clickNum);
            }
        })
    })
    input2.map(targetStr=>{
        let totalClick = 0;
        let tempArr = targetStr.split('');
        for(let i = 0 ; i < tempArr.length ; i ++){
            if(mapped.get(tempArr[i])=== undefined){
                totalClick = -1;
                break;
            }else{
                totalClick += mapped.get(tempArr[i]);
            }
        }            
        answer.push(totalClick);
    })
    return answer;
}

let input1 = ["ABACD", "BCEFD"];
let input2 = ["ABCD","AABB"];
let input3 = '';
let input4 = '';

solution(input1, input2, input3, input4);