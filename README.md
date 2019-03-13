# reduxapp1

https://github.com/coryhouse/pluralsight-redux-starter

Number, String, Boolean, Undefined, Null --> Immutable
Onjects, Arrays, Functions ---> Mutable

Object.assign({}, state, {role: 'admin'})

Autobind function works on React.createClass but for ES6 class we have to bind it
bind in render is performance issue as it creates a function everytime the component renders

dispatch will not be added to props by Connect when we add mapDispatchToProps parameter

Redux Async Libraries-middleware(action -> middleware -> reducer)
redux-thunk
redux-promise
redux-observable
redux-saga

// thunk is a computer science term // thunk always returns a function that only accepts dispatch // todelay function