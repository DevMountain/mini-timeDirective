angular.module('myApp')
.directive('partyButton', function($interval) {



  function randomColor() {
    var colors = ['red', 'purple', 'yellow', 'green', 'orange', 'banana', 'black'];

    return colors[Math.floor(Math.random() * colors.length)];
  }



  return {
    restrict: 'AE',
    templateUrl: 'partyButton.html',
    scope: {
      title: '@',
      twoWay: '=',
      guests: '='
    },
    link: function(scope, element, attributes) {
      scope.twoWay = "noBurger";
      element.on('click', function() {
        $interval(function() {
          element.find('div').css('color', randomColor());
          element.find('div').css('background-color', randomColor());
        }, 25)

      })

    },
    controller: function($scope) {
      $scope.twoWay = 'Fooburger';
    }
  }
})
