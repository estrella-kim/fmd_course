var numbers = [1,2,3];
var roots = numbers.map(Math.sqrt);

var arr = [{key:1, value: 10}, {key: 2, value: 20}, {key: 3, value: 30}];
var reformatArr = arr.map(function(obj) {
    console.log(obj);
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
})
console.log(reformatArr);

