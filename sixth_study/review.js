var arr = = [3, 9, 33,55, 12];
var result = arr.filter(fucntion(v, i, arr){
    console.log(v, i, arr)
    return v >=10;
}) //찾는것이고
result.reduce(function(p, c){
    return p+c ;
}, 0) //여러 개의 배열의 값을 하나로 수렴시키는
console.log(result);ㅁ
console.log(sumValue);
var result = arr.filter(fucntion(value){
    return value >=10;
}).reduce(function(p, c){
    return p+c ;
}, 0) //여러 개의 배열의 값을 하나로 수렴시키는

var result = arr
.filter(value => valuoe >= 10)
.reduce((p, c) => p + c, 0);
console.log(result);

// filter(v, i, arrr)