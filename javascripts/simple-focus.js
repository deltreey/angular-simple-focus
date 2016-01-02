'use strict';

angular.module('simple-focus', [])
  .directive('simpleFocus', function ($timeout) {
    return {
      restrict: 'A',
      scope: {
      	simpleFocus: '='
      },
      link: function(scope, element) {
        scope.$watch('simpleFocus', function() {
          $timeout(function() {
            var value = scope.simpleFocus;
            if(value === true || value === undefined) {
              element[0].focus();
              scope.simpleFocus = false;
            }
          });
        });
      }
    };
  });
