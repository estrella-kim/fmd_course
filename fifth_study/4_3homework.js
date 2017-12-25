var max = req
function max(nuombers) {
    var result = numbers[0];


    for(var i=0; i < numbers.length; i++){
        if(result < numbers[i]) {
            result = numbers[i];
        }
    }
    return result;
}


console.log(max([1,5,4,3]));
console.log(max([1,50, 40, 2]));
//음수로도 테스트를 해보았어야한다..
console.log(max[-5,-3, 1, 10]);

