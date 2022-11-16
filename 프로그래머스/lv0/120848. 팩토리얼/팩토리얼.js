function solution(n) {
    i = 1;
    while(i >= 1){
        n /= i;
        i++;
        if(n < i) {
            break;
        }
    }
    return i-1;
}