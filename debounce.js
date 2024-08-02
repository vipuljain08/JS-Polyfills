// A debounce function in JavaScript is a higher-order function that limits the rate at which a function can fire.
// When a debounced function is invoked, it delays the execution of the actual function until after a specified wait time has passed since the last time the debounced function was called. 
// If the debounced function is called again before the wait time is up, the timer is reset.
// It's useful for situations where you want to control the execution of events that can occur very frequently, 
// such as keystrokes, window resizing, or button clicks.

// Syntax
// optimisedFunction = debounce(normalFn, wait)

// Parameters
// normalFn: The function to be debounced.
// wait: The wait time in milliseconds.

// Return Value: optimisedFunction

function debounce(fn, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

let handleChange = (value) => fetch(`${api}/${value}`).then(response)

let optimisedFunction = debounce(handleChange, 300)
