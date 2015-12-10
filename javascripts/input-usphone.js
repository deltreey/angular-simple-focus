'use strict';

angular.module('input-usphone', [])
  .directive('phone', function () {
    function makePhoneNumber (value) {
      var result = value;

      var phone = value ? value.toString() : '';
      if (phone.length > 3) {
        result = '(' + phone.substr(0, 3) + ') ';
        if (phone.length > 6) {
          result += phone.substr(3, 3) + '-';
          result += phone.substr(6, 4);
        }
        else {
          result += phone.substr(3);
        }
      }

      return result;
    }

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$formatters.push(function (value) {
          return makePhoneNumber(value);
        });

        // clean output as digits
        ngModel.$parsers.push(function (value) {
          var cursorPosition = element[0].selectionStart;
          var oldLength = value.toString().length;
          var nonDigits = /[^0-9]/g;
          var intValue = value.replace(nonDigits, '');
          if (intValue.length > 10) {
            intValue = intValue.substr(0, 10);
          }
          var newValue = makePhoneNumber(intValue);
          ngModel.$setViewValue(newValue);
          ngModel.$render();
          element[0].setSelectionRange(cursorPosition + newValue.length - oldLength, cursorPosition + newValue.length - oldLength);
          return intValue;
        });
      }
    };
  });
