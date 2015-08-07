angular.module "ujs", []

angular.module("ujs").directive "method", ["$http", ($http) ->
  restrict: "A"
  link: ($scope, element, attrs, controller) ->
    return unless element[0].tagName.toUpperCase() in ["A", "BUTTON"]
    element.bind "click", (e) ->
      if !attrs.confirm || confirm(attrs.confirm)
        form = document.createElement("form")
        form.setAttribute("action", (attrs.href || attrs.to))
        form.setAttribute("method", "POST")

        imethod = document.createElement("input")
        imethod.setAttribute("type", "hidden")
        imethod.setAttribute("name", "_method")
        imethod.setAttribute("value", attrs.method)
        form.appendChild(imethod)

        csrfParam = document.querySelector('meta[name=csrf-param]')?.content
        csrfToken = document.querySelector('meta[name=csrf-token]')?.content

        if csrfParam && csrfToken
          imethod = document.createElement("input")
          imethod.setAttribute("type", "hidden")
          imethod.setAttribute("name", csrfParam)
          imethod.setAttribute("value", csrfToken)
          form.appendChild(imethod)

        document.body.appendChild(form)
        form.submit()

      e.preventDefault()
      e.stopPropagation()
]
