function solution(common) {
    for(i=0; i<common.length; i++){
        let answer1 = common[common.length-1]-common[common.length-2]
        if(answer1 === common[common.length-2]-common[common.length-3]){
            return common[common.length-1]+answer1
        }
        let answer2 = common[common.length-1]/common[common.length-2]
        if(answer2 === common[common.length-2]/common[common.length-3]){
            return common[common.length-1]*answer2
        }
    }
}