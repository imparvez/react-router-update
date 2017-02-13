# React Router


```js
<Route path="/" component={App}>
```
Main route that will wraps the rest of the routes

```js
<Route path="URL" component={COMPONENT} />
```
path attribute: defines rthe route URL
component attribute: defines the component for this route.

```js
{this.props.children}
```
Whenever this above tag is inserted in any of the parent route, the content of the child component will be 
poured out.