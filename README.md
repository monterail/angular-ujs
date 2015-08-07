# Angular UJS

jQuery UJS replacement for `data-method`

With Rails:
```ruby
link_to "Delete", foo_path(1), data: {'method': :delete, 'confirm': 'R U sure?'}
button_to "Delete", foo_path(1), method: 'delete', data: {'confirm': 'R U sure?'}
```

Without Rails:
```html
<div ng-app="app">
  <a href="/test" data-method="delete" data-confirm="R U sure?">Delete</a>
  <button to="/test" data-method="delete" data-confirm="R U sure?">Delete</a>
</div>
```

Include `ujs` module in your app module.
```js
angular.module('myApp', ['ujs']);
```


## Development

```bash
npm install
grunt
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

