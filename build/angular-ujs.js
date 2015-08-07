(function() {
  angular.module("ujs", []);

  angular.module("ujs").directive("method", [
    "$http", function($http) {
      return {
        restrict: "A",
        link: function($scope, element, attrs, controller) {
          var _ref;
          if ((_ref = element[0].tagName.toUpperCase()) !== "A" && _ref !== "BUTTON") {
            return;
          }
          return element.bind("click", function(e) {
            var csrfParam, csrfToken, form, imethod, _ref1, _ref2;
            if (!attrs.confirm || confirm(attrs.confirm)) {
              form = document.createElement("form");
              form.setAttribute("action", attrs.href || attrs.to);
              form.setAttribute("method", "POST");
              imethod = document.createElement("input");
              imethod.setAttribute("type", "hidden");
              imethod.setAttribute("name", "_method");
              imethod.setAttribute("value", attrs.method);
              form.appendChild(imethod);
              csrfParam = (_ref1 = document.querySelector('meta[name=csrf-param]')) != null ? _ref1.content : void 0;
              csrfToken = (_ref2 = document.querySelector('meta[name=csrf-token]')) != null ? _ref2.content : void 0;
              if (csrfParam && csrfToken) {
                imethod = document.createElement("input");
                imethod.setAttribute("type", "hidden");
                imethod.setAttribute("name", csrfParam);
                imethod.setAttribute("value", csrfToken);
                form.appendChild(imethod);
              }
              document.body.appendChild(form);
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
