function join(str){
    let i, word = str.length, result = "";
    for( i = word-1; i >= 0; i--) result += str[i]
    return result;
}
console.log(join('frontend JS'))
del()
//////////////////////////////////////////////////////////////////////////////////

function allSum(...number){
    let middleNum = 0;
    for(let i = 0; i < number.length; i++){
        middleNum += number[i];
    }
    return middleNum / number.length;
}
console.log(allSum(9, 14, 27, 30, 8))

//////////////////////////////////////////////////////////////////////////////////
function del(){
    console.log('_'.repeat(50))
}


