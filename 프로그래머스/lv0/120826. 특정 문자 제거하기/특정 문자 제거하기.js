function solution(my_string, letter) {
    for(i=0; i<my_string.length; i++){
        return my_string.split(letter).join('')
    }
}