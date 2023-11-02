# Stopwatch and Date Picker Web App

This simple web application consists of a stopwatch and a date picker. It demonstrates various HTML, CSS, and JavaScript features. Additionally, it utilizes asynchronous programming with Async, Await, Promises, Set Interval, and Clear Interval.

## HTML

The HTML code in `index.html` includes:

- The use of `<!DOCTYPE html` for specifying the document type.
- Meta tags for character set and viewport configuration.
- The `<link>` element to import an external CSS file.
- A container with various elements, including labels, buttons, and an input field.

## CSS

The CSS code in `styles.css` showcases:

- The use of CSS variables (custom properties) declared in `:root`.
- Styling of the entire page, setting background color and font family.
- Centered alignment of content using `text-align` and `display: flex`.
- Use of classes to style different sections, such as `.watch`, `.time`, `.datetime`, and `.controls`.
- Custom styling for buttons, including hover and active states.

## JavaScript

The JavaScript code in `script.js` demonstrates the following features:

- Accessing HTML elements with `document.getElementById`.
- Use of variables, including `timerLabel`, `startButton`, `stopButton`, `resetButton`, and `datePicker`.
- Asynchronous functions (`async function`) using Async and Await:
  - `updateTimer()` to update the timer display.
  - `startTimer()` for starting the stopwatch, using `setInterval`.
- Promises are used within the `updateTimer()` function to perform asynchronous tasks.
- `setInterval` to update the timer display at regular intervals.
- `clearInterval` to stop the timer when needed.
- Functions for starting, stopping, and resetting the stopwatch.
- Setting the initial date in the date picker and making it non-editable.

**Note:** The original code had a variable `datePicker` that was declared after its usage. It's moved to the correct position in the JavaScript code.

Additionally, the code now prevents users from manually typing or editing the date in the input field. Users can still select dates from the drop-down calendar while preventing direct keyboard input.

This web application allows users to interact with a stopwatch and select dates using the date picker while showcasing a range of web development features and practices.
