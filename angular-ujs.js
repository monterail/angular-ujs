angular.module('ujs', []);
angular.module("ujs").directive("method", ['$http', function($http) {
  return {
    restrict: "EAC",
    require: "?ngModel",
    link: function($scope, element, attrs, controller) {
      element.bind("click", function(e) {
        if (!attrs.confirm || confirm(attrs.confirm)) {
          $http({ method: attrs.method, url: attrs.href });
        }
        e.preventDefault();
        e.stopPropagation();
      });
    }
  };
}]);
