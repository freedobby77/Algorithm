function solution(array) {
    for(i=0; i<array.length; i++){
        if(array[i] === Math.max(...array)){
            return [Math.max(...array), i]
        }
    }
}