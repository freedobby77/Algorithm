function solution(my_string) {
    my_string.split()
    reverse = []
    for(i = my_string.length - 1; i >= 0; i--){
    reverse.push(my_string[i])
    }
    return reverse.join('');
}