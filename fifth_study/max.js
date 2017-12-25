/*function max(a,b,c){
    if (a.contructor instanceof Array) {
        var numResult = a;

        if (numResult < b) {
            numResult = b;
        }
        if (numResult < c) {
            numResult = c;
        }
        numResult = c;
        return numResult;
    }
    if (a.contructor instanceof Number) {
        var arrayResult = a[0];

        for (var i=0; i < a.length; i++) {
            if (arrayResult < a[i]) {
                arrayResult = a[i];
            }
        }
        return arrayResult;
    }
}*/

function max(a,b,c){
    //함수가 실행되면 자동으로 arguments가 자동으로 할당된다. 함수의 인자로 들어온 아이들을 arguments라는 인자로 받아옴. a. b. c => arguments 유사배열(실제 배열은 아니지마 ㄴ배열처럼 동작한다.)
   /* if(a instanceof Array) {
        var array = a;
        var maxNum = array[0];

    } else{
        array = arguments;
    }*/
    var array =  a instanceof Array ? a : arguments;
    var maxNum = array[0];
    for(var i=0; i < array.length; i++) {
        if(maxNum < array[i]) {
            maxNum = array[i];
        }
    }
    return maxNum;
}
module.exports = max;
console.log(max(1,2,3));
console.log(max([-1,0, 71,13])); //콘솔은 0실행에 대한 출력을 보여주는 코드일 뿐
