function solution(my_string, n) {
    string_arr = my_string.split('')
    let string3=[]
    for(i=0; i<string_arr.length; i++){
        for(j=0; j<n; j++){
            string3.push(string_arr[i])
        }
    };
    return string3.join('');
}