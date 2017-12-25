
/* 예제 */
// var array = [ 1,2,3,4];
var array2 = ['강아지', '고양이'];

var test = (function(){
    if(array) console.log(array);
    if(array2) console.log(array2);
})(array || array2)
