var i=10;
// while(i){
//     console.log(i);
//     i--;
// }
//
while(--i){
    console.log(i)
}
while(i--){
    console.log(i);
}

/*  재미있는 점 전치 연산자 vs 후치연산자

 while(i값으로 true/false){
   //로직
 }// 전치/후치 연산자는 return 값이 i 다..
 while(i--){
    console.log(i); //9~ 0까지 실행됨 .
 }
console.log(i) // -1;
 while(--i){
    console.log(i); // 9~1까지 실행됨.
}
console.log(i) //  0
 */
