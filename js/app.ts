/// <reference path="../typings/angularjs/angular.d.ts" />


// 上のd.tsを用意するか、
// または、ここに
/* declare var angular; */
// を代わりに記述すればTypescriptのコンパイル可能。

angular.module('app', ['duScroll']).
  controller('MyCtrl', ['$scope','$document',function($scope, $document){
    $scope.toTop = function() {
      $document.scrollTop(0, 5000);
    }
    var a3 = angular.element(document.getElementById('a3'));
    $scope.toA3 = function() {
      $document.scrollTo(a3, 30, 1000);
    }
  }
]);


