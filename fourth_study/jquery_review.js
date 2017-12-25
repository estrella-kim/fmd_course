$('btn').on('click', function(e){
    console.log(e); //clicked!
})
function $(id){
    var element = document.getElementById(id);
    return {
        on: function(event, callback) {
            element.addEventListener(event, function(){
                setTimeout(function(){
                    callback('clicked');
                }, 1000);
            })
        }
    }
}



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