(function() {
  angular.module("ujs", []);

  angular.module("ujs").directive("method", [
    "$http", function($http) {
      return {
        restrict: "A",
        link: function($scope, element, attrs, controller) {
          return element.bind("click", function(e) {
            if (!attrs.confirm || confirm(attrs.confirm)) {
              $http({
                method: attrs.method,
                url: attrs.href
              });
            }
            e.preventDefault();
            return e.stopPropagation();
          });
        }
      };
    }
  ]);

}).call(this);
