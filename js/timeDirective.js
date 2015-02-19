angular.module('timeApp').directive('showTime', function() {
	return {
		restrict: 'E',
    	template: '<div><!--<span class="lead-in">The current time is</span> <br/><br/> --><span class="time">{{time}}</span><!-- <br/><br/> <span class="date">{{date}}</span> </div>-->',
    	//scope: "=",
    	link: function($scope, $elem, $attr){
      		var d = (new Date()+'').split(' ');
      		var friendlyTime =  d[4];
      		var date = [d[1], d[2]].join(' ') + ", " + d[3]
      		$scope.time = friendlyTime;
      		$scope.date = date

    	}
  	}
});

// <head>
// <script>
// function startTime() {
//     var today=new Date();
//     var h=today.getHours();
//     var m=today.getMinutes();
//     var s=today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML = h+":"+m+":"+s;
//     var t = setTimeout(function(){startTime()},500);
// }

// function checkTime(i) {
//     if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }
// </script>
// </head>

// <body onload="startTime()">

// <div id="txt"></div>

// </body>