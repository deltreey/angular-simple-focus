'use strict';

angular.module('simple-focus', [])
  .directive('simpleFocus', function ($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch(attrs.simpleFocus, function() {
          $timeout(function() {
            var value = scope[attrs.simpleFocus];
            if(value === true || value === undefined) {
              element[0].focus();
              scope[attrs.simpleFocus] = false;
            }
          });
        });
      }
    };
  });
