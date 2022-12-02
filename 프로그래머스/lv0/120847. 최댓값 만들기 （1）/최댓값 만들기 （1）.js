function solution(numbers) {
    arr = []
    for(i=0; i<numbers.length; i++){
        for(j=0; j<numbers.length; j++){
            if(i != j){
                arr.push(numbers[i]*numbers[j])
            }
        }
    }
    return Math.max(...arr)
}