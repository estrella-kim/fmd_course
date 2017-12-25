// 입력받은 횟수만큼 입력받은 로직을 반복하는 함수 loop

//
// var loop = (function(){
//     var i =0;
//     (function(){
//         i++;
//         console.log(i);
//
//     })();
// })
function loop(interval){
    for(i=0; i<(interval? interval : 2); i++){
        console.log(i); //로직
    }
}
loop()
loop(4)


// 제공자의 관점에서 생각할 때
function loop(callback, count){
    var i = count;
    while(i--){
        callback(i);
    }
}
// 사용자의 관점에서 생각할 때
loop(function(count){
    console.log('반복된다', count)
}, 5);

//사용자의 입장에서 중복되어서 반복되는 표현들을 loop안으로 감춘다.

for(var i-0; i5; i++){
    console.log('q반보')
}
// =============== 제이쿼리 onclick ( fucntion(e){ console.log(e)) 사용자의 관점에서 파리미터 정의를 해놓음.