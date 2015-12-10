angular-simple-focus
=====

An attribute to focus an element when it appears and by a value.

It's a simple angularjs directive that focuses an input when it appears and whenever you set a value to `true`.  This means that this works to set the focus on page load, and as an element is created as part of an `ng-repeat` and of course it can be set manually.

Because it's such a small amount of code, it should be able to read and understand so you can even tweak it for your needs.  In fact, I encourage it!

Available on Bower
-----

`bower install angular-simple-focus`

How To
-----
Simply include the simple-focus module

```javascript
var app = angular.module('app', [ 'simple-focus' ]);
```

Then use the simple-focus attribute on your html elements

```html
<input type="text" simple-focus="someValue" />
```

Note that the `simple-focus` attribute must have a value, but that value is arbitrary, so pick whatever you want.  The value is pulled in from your controller's `$scope`, so `$scope.someValue` in my controller is the value for the `simple-focus` attribute above.  If I set `$scope.someValue = true;` in my controller, the input would get focus.

There are [lots](https://github.com/ds82/ng-focusme) [of](https://github.com/hiebj/ng-focus-if) [different](https://github.com/goodeggs/ng-focus-on) [directives](https://github.com/hewerthomn/angular-focus-it) [just](https://github.com/kfuchs/angular-focus-on) [like](https://github.com/goodeggs/ng-focus-on) this one.  And [lots](http://jsfiddle.net/GlobalDomestic/d3P2a/light/) [of](https://gist.github.com/revolunet/4075928) [people](http://www.angulartutorial.net/2014/04/angular-js-auto-focus-for-input-box.html) [have](http://www.jomendez.com/2015/10/05/focus-on-input-field-in-angularjs-mini-challenge-8-answer/) [attempted](http://stackoverflow.com/questions/14833326/how-to-set-focus-on-input-field) to explain it in examples  In fact, this code is almost an exact copy of [this](https://gist.github.com/EpokK/5947484) example gist.  I built this one because none of the other ones worked exactly this way, most of them were just examples, not a project that people could feel like they were a part of, and most of them were much more complicated both to use and to develop for.  This one is simple.  If it doesn't perfectly fit your needs, I have confidence it will help you understand enough to redesign it for yourself.  I'll even happily accept pull requests and issues to improve it.

Check out the github pages example here: http://deltreey.github.io/angular-simple-focus/
