angular.module('timeApp').directive('showTime',function(){
    return {
      restrict:'E',
      template:'<div> The current time is {{time}} </div>',
      link: function(scope, element, attrs) {
        var currentTime= new Date();
        scope.time= currentTime.toString();
      }
    }
    // scope, element, and attrs

  })



// whenClicked : '&'
// link : function(scope, elment , attributes){
// element.on('click', function() {
//
// scope.whenClicked({intro:"heeeyyyy" ,title: scope.title});
// })
//
// }
// angular.module('myApp').directive('calculator', function() {
//   return {
//     template: <input ng-model="num1/> <input ng-model ="num2"/><button ng-click="calclulate"
//   }
// })
