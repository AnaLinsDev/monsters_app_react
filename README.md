REACT COURSE - SECTION 3

Classes: 30 / 58

_____

Link Udemy: https://www.udemy.com/course/complete-react-developer-zero-to-mastery 

_____

Functional Components: 
Just a simple return in JS;
Stateless;
Can  not use lyfecycle methods.

Class Components: 
Has to extend from React;
Stateful;
Can use lyfecycle methods.

_____

setState

Should use “setState” to change the current state, because that method correctly updates the data in memory.

The “setState” is asynchronous, so you must pay attention to how to use it and which order you will put your code, like in the first function in the callback. Callback is the second argument and it will run after the first.

this.setState(
                () => {
                  console.log("I am the Main Call");
                  return { name: "Julia" };
                },
                () => {
                  console.log("I am the Callback");
                }
              );

_____

SPAs

Single Page Applications (SPAs) are modern web applications that load a single HTML page. 

SPAs fetch data asynchronously from servers without full page reloads. 

State management libraries like Redux or Vuex are used to manage the state on the client side. 

SPAs offer improved performance and reduced server requests compared to traditional multi-page applications.
_____

You can use the fetch function as a promise to return some data from  an API endpoint.

_____

The lifecycle method “componentDidMount” is called after the initial render() is called.

_____



_____



_____



_____



_____



_____
