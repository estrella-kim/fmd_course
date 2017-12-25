// for(var i=0; i; i--){
// console.log(i);
// }
/*
 var gugudan = function(num){

    for(var i=1;i<10;i++){
        console.log(num +"*"+ i +"=" + num*i);

    }
}
gugudan(9);
*/

var gugudan = function(dan,limitNum ){

    for(var i=1;i<limitNum+1;i++){
        console.log(dan +"*"+ i +"=" + dan*i);

    }
}
var gugudan = function(dan,max ){

    for(var i=1;i<= (max? max: 9);i++){
        console.log(dan +"*"+ i +"=" + dan*i);

    }
}
gugudan(9, 3);
gugudan(9);

//사용자 관점에서 망가지지 않도록 리팩토링 하는게 줗용하다.
// 비동기 함수
setTimeout(function gugudan(){
    console.log('1초 뒤 실행')
}, 1000)
setInterval(function(){
   console.log(new Date()) //브라우저에서 제공해ㅑ주는 date함수
    console.log('interval');
}) //익명함수를 콜백함수라고 하는데 제어권을 넘겨주는 것.