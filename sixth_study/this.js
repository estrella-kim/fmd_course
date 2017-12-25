/*

함수를 호출하면 일어나는 일(넘버링이 순서는 아니다.)
1. 지역변수 세팅(함수 내에서 선언된 지역변수를 세팅)
2. arguments 세팅(내부적으로 보이지 않게 아규먼츠라는 객체를 세팅한다. 전달해준 인자를 배열처럼 간주하는 인자들을 세팅. 함수가 실행되면 내부적으로 만들어진다.
3. this 세팅 (함수가 실행되면 내부적으로 만들어진다. 함수가 어떻게 호출되었느냐에 따라 this는 달라진다 )
4. 기타 등등
*/
"use strict";  //파일 내에서 선언을 해주어도 되고 함수 내에서 선언을 해줘도 된다.엄격모드로 하겠다.

//1. 일반함수 호출
 function a() {
    var person = {};
    //arguments
    console.log(arguments)
    console.log(this)
    // return {};
}
 a(1,2,3,4);
 a(); //window
 var obj= {
     a: function() {
         console.log(this);
     }
 }
obj.a(); //{ a: function(){ ...}

 //2. 객체의 메소드로써의 함수
var obj = {
    name: "efe",
    a:a
}
obj.a();

// 3. new 호출(new로 호출하는 함수를 생성자 함수라고 부른다. 생성자처럼 동작해서 생성자 함수이지, 생성자 본인이라서 생성자 함수는 아니다. )
// new a();

//객체를 생성하고 a라는 객체를 반환,
//new로 호출하는 함수의 이름은 맨 앞을 대문자로 하자.(컨벤션)
function Abc() {
    console.log(this)
    this.name = "suho";
    this.age = "12"
}
new Abc();
var abc = new Abc();
var abc2 = new Abc();
var abc3 = new Abc();

// 4. call , apply함수

function ddd() {
    console.log(this)
    console.log('a :', a);
    console.log('b :', b);

}
ddd.call(null); //null
ddd.call({name: 111}, 1, 6); // a:1 b:6 내가 전달한 것이 this가 된다.
ddd.apply({ name : 111}, [1, 6]) //뒤의 인자는 마치 아규먼츠러럼 배열 형태로 전달해야한다. 내가 전달한 것이 this가 된다.
var abc = {
    b : fucntion(){
        var aa = 123;
        console.log('1번', this)
        function bbb(){
            console.log('2번', this);
            var aa =1;
            // 특정한 개체에 포함되지 않고 그냥 호출된 함수
        }
        bbb();
    },
    c: function() {
        console.log('3번', this)
    }
}
abc.b();
abc.c.call(obj)
//함수가 호출된 방식에 의해 this가 결정된다.

//4. 변수의 호이스팅

var hh = 111;
var hoistTest = {
    b : fucntion(){
    var aa = 123;
    console.log('1번',h1) //undefined
    function bbb(){
        console.log('2번', h1);
        var h1 =1;
        // 특정한 개체에 포함되지 않고 그냥 호출된 함수
    }
    var h1 = 0;
    bbb(); //0
    },
    c: function() {
        console.log('3번', hh) //111
        var hh = 555;
    }
}
hoistTest.b();
hoistTest.c();


//
function Object() {

}
function Array() {

}
var person = {};
var person = new Object();
conosole.log(person.run()); //syntax error
consoie.log(person.hasOwnProperty('name')); // falae syntax error가 아니라 undefined
//객체는 내부적으로 보이지 않는 링크(참조)를 들고 있다.
// 어떤 객체를 참고하고 있으며 그 객체는 또다른 객체를 참조.
// 이 링크를 프로토타입 체인이라고 한다.
var array = []; //배열 리터럴
var array = new Array();

console.log(arr.length)
//length 는 프로토에 들고 있는 게 아니라 배열 자체가 들고 있다.
arr.push();
//프로토에 보면 push 가 있다.
console.log(arr.length);
arr.push('cd');
arr.pop();
arr.pop();

