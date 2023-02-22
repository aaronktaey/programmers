function solution(s){
    var answer = [];
    [...s].map((el,i,arr)=>{
        if(arr.indexOf(el) === i){
            answer.push( -1 );
        }else{
            answer.push(Math.abs(i-arr.indexOf(el)));
            arr[arr.indexOf(el)] = '';
        }
    })
    return answer;
}
let input = "banana";
solution(input);