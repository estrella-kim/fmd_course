$('btn').on('click', function(e){
    console.log(e); //clicked!
})
// function $(){
//     return {
//         on: function(eventName, callback){
//             // setInterval(callback('clicked!'), 1000);
//             setTimeout(function(){
//                 callback('clicked')
//             }) 1000)
//         }
//
//     }
// }
// function $(){
//     var element = document.getElementById(id);
//     return {
//         on: function(eventName, callback){
//             setTimeout(function(){
//                 var eventName = {
//                     type: 'click',
//
//                 };
//                 callback(event);
//             }) 1000)
//         }
//
//     }
// }
function $(id){
    var element = document.getElementById(id);
    return {
        on: function (eventName, callback) {
            element.addEventListener(eventName, function () {
                callback.call(element, {
                    event: 'click'
                });
            });
        }
    }

};

// function $(id) {
//     var element = document.getElementById(id);
//     return {
//         on: function(eventName, callback) {
//             element.addEventListener(eventName, function() {
//                 callback.call(element, {
//                     // callback(element. {}) call을 하지 않으면 window를 호출  왜지?객체는 element로 받는 것 아닌가?
//                     event: 'click'
//                 });
//             });
//             /*setTimeout(function() {
//               var event = {
//                 type: 'click',
//                 x: 50,
//                 y: 100
//               };
//               callback(event);
//             }, 1000);*/
//         }
//     }
// }

//conssole.dir(document); document객체의 형태를 볼 수 있음. getElementById라는 함수가 해당 객체 안에 정의되어 있기 때문에