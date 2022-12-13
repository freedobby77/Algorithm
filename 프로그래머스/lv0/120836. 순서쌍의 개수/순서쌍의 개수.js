function solution(n) {
    count = 0;
    for(i=1; i<=n; i++){
        if(n/i === Math.floor(n/i)){
            count++
        }
    }
    return count;
}