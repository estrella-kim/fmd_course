/*function sum(numbers) {
    var total= 0;

    for(var i-0; i < numbers.length; i++) {
        total1 += numbers[i];
    }
    return total;
}*/

/**
 * 위 코드의 문제는 루프를 돌면서 다 실행을 해준다. 인풋과 시간이 정비례
  */
function sum(numbers) {
    var total = 0;
    var times  = numbers.length;
    var count = (numbers[0]+numbers[times-1]) *( Math.floor(times/2));
    if(times%2 ==0){
        total = count;

        return  total;
    }
    total = count + numbers[Math.floor(times/2)];
    return total;
}
/*function sum(numbers){
    var targetNumber = numbers[0] + numbers[numbers.length-1];
    return targetNumber * (numbers.length/2);
}*/

//전제는 연속된 숫자일때

module.exports = sum;
