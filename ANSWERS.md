- [ ] Why would you use class component over function components (removing hooks from the question)?
* Class components make use of ES6 class and extend the Component class in React.
* Sometimes called “smart” or “stateful” components as they tend to implement logic and state.
* React lifecycle methods can be used inside class components (for example, componentDidMount).
* You pass props down to class components and access them with this.props
- [ ] Name three lifecycle methods and their purposes.
* render - it handles rendering of your component 
* componentDidMount - Called as soon as your component mounts
* componentDidUpdate = called when your component updates
- [ ] What is the purpose of a custom hook?
* Custom Hooks allow you to reuse logic throughout the whole application while writing it once
- [ ] Why is it important to test our apps?
* To ensure that everything is functioning as intended. There may be things that were missed during development and they will be caught with proper testing