angular.module "ujs", []
angular.module("ujs").directive "method", ["$http", ($http) ->
  restrict: "A"
  link: ($scope, element, attrs, controller) ->
    element.bind "click", (e) ->
      if !attrs.confirm || confirm(attrs.confirm)
        $http(method: attrs.method, url: attrs.href)

      e.preventDefault()
      e.stopPropagation()
]
