function solution(numbers) {
    max = []
    for(i=0; i<numbers.length; i++){
        for(j=0; j<numbers.length; j++){
            if(i === j) {
                continue;
            }
            max.push(numbers[i]*numbers[j])
        }
    }
    return Math.max(...max)
}