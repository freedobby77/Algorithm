function solution(dots) {
    arr = []
    for(i=0; i<3; i++){
        arr.push(Math.sqrt((dots[3][0]-dots[i][0])**2+(dots[3][1]-dots[i][1])**2))
    }
                 
    if(arr[0] > arr[1] && arr[0] > arr[2]){
        return arr[1]*arr[2]
    } else if(arr[1] > arr[0] && arr[1] > arr[2]) {
        return arr[0]*arr[2]
    } else{
        return arr[0]*arr[1]
    }
    

}