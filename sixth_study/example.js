//구현하라.
/*
<!> 원본에 손상을
1.push
2.. pop
3. sort
var arr = [2.5.1.2.3.6.9.7];
arr.sort();
console.log(arr);

<2> 원본에 손상을 가하지 않고
1. join('}}');
2. map
3. filter
4. every
5. some
6. reduce
* */
var m = arr.map(function(value){
    return value + 10000;
})
    console.log(arr)
    console.log(m)

    var f = arr.filter(function(value){
        return value % 2 === 0
    })
    console.log(f)
    console.log(arr);

    var t = arr.reduce(function(prev, current, index){
        return prev['key[' + index + ']' = current;
    return prev + current
    return prev
}, 0)
console.log(t);
console.log(arr);