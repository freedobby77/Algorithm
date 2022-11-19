function solution(num_list) {
    count_even = 0
    count_odd = 0
    for(i=0; i<num_list.length; i++){
        if(num_list[i] % 2 === 0){
            count_even++
        }else{
            count_odd++
        }
    }
    answer =  [count_even, count_odd]
    return answer;
}