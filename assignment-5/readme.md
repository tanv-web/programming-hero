Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans1: getElementById returns one element with (unique ID).
getElementsByClassName returns first element with matching class name.
querySelector → returns first match using CSS selector.
querySelectorAll returns all matches of css selector.

Q2: How do you create and insert a new element into the DOM?
Ans2: const div = document.createElement("div");
div.textContent = "Hello World";
document.body.appendChild(div); // insert into DOM

Q3: What is Event Bubbling and how does it work?
Ans3: Events start at the target element and bubble up through ancestors (child → parent → document).

Q4: What is Event Delegation in JavaScript? Why is it useful?
Ans4: Attach a single event listener on a parent to handle events on its children (uses bubbling).

Q5: What is the difference between preventDefault() and stopPropagation() methods?
Ans5: preventDefault() → stops the default action (e.g., form submit, link navigation).
stopPropagation() → stops the event from bubbling up the DOM.
