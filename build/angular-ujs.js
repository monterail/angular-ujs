(function() {
  angular.module("ujs", []);

  angular.module("ujs").directive("method", [
    "$http", function($http) {
      return {
        restrict: "A",
        link: function($scope, element, attrs, controller) {
          if (element[0].tagName.toUpperCase() !== "A") {
            return;
          }
          return element.bind("click", function(e) {
            var csrfParam, csrfToken, form, imethod, _ref, _ref1;
            if (!attrs.confirm || confirm(attrs.confirm)) {
              form = document.createElement("form");
              form.setAttribute("action", attrs.href);
              form.setAttribute("method", "POST");
              imethod = document.createElement("input");
              imethod.setAttribute("type", "hidden");
              imethod.setAttribute("name", "_method");
              imethod.setAttribute("value", attrs.method);
              form.appendChild(imethod);
              csrfParam = (_ref = document.querySelector('meta[name=csrf-param]')) != null ? _ref.content : void 0;
              csrfToken = (_ref1 = document.querySelector('meta[name=csrf-token]')) != null ? _ref1.content : void 0;
              if (csrfParam && csrfToken) {
                imethod = document.createElement("input");
                imethod.setAttribute("type", "hidden");
                imethod.setAttribute("name", csrfParam);
                imethod.setAttribute("value", csrfToken);
                form.appendChild(imethod);
              }
              form.submit();
            }
            e.preventDefault();
            return e.stopPropagation();
          });
        }
      };
    }
  ]);

}).call(this);
