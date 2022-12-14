function solution(n) {
    answer = 0
    for(i=0; i<String(n).length; i++){
        answer += Number(String(n)[i])
    }
    return answer;
}