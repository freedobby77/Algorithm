function solution(num1, num2) {
    0 < num1 && num1 <= 100;
    0 < num2 && num2 <= 100;
    return (num1-num1%num2)/num2;
}