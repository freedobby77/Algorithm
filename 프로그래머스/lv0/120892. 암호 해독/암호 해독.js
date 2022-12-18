function solution(cipher, code) {
    cipher_arr = cipher.split('')
    code_arr = []
    for(i=code-1; i<=cipher_arr.length; i++){
        if((i+1)%code === 0){
            code_arr.push(cipher_arr[i])
        }
    }
    return code_arr.join('');
}