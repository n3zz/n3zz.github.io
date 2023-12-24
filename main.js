// Module imports
import commands from "./commands.js";

// DOM Elements
const form = document.querySelector("form"); // The selector for the form and how we are getting the form window itself so we can fire the event
const input = document.querySelector("#user-input"); // The input data so we can parse it through.
const output = document.querySelector("#terminal-output"); // The terminal output.

// States
const defaultOutput = output.innerHTML;
const inputMemory = []; // Stores all previous inputs.

// Event listeners
form.addEventListener("submit", event => { // Add a SubmitEvent listener to handle user submissions.
  event.preventDefault(); // Prevents the page from refreshing.

  // Handle form data
  inject(`<span class="user">user@n3zz</span>: ${input.value}`);
  handleInput(input.value);

  inputMemory.unshift(input.value); // Adds the input to the start of the array.
  
  input.value = ''; // Clear input form
});

/**
 * Prints a value to the terminal output div.
 * @param {string} value The value to print.
 */
function inject(value) { output.innerHTML += `<p>${value}</p>`; }

/**
 * Handles the user input.
 * @param {string} input The user input string.
 */
function handleInput(input) {
  if (input === "clear") {
    output.innerHTML = defaultOutput;

    return;
  }
  
  for (const command of commands) if (input === command.name) {
    command.execute(inject);

    return;
  }

  inject("Don't break my site. >:(");
}
