# Angular UJS

jQuery UJS replacement for `data-method`

With Rails:
```ruby
link_to "Delete", foo_path(1), data: {'method': :delete, 'confirm': 'R U sure?'}
```

Without Rails:
```html
<div ng-app="app">
  <a href="/test" data-method="delete" data-confirm="R U sure?">Delete</a>
</div>
```

```js
angular.module('myApp', ['ujs']);
```
