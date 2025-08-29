
### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   **Ans**
  - `getElementById` selects a single element using its `ID`.
  - `getElementsByClassName` selects all elements with a specific class and returns a collection.
  - `querySelector` selects the first element that matches a CSS selector.
  - `querySelectorALL` selects all elements that matches a CSS selector and return a list.
  
   
2. How do you **create and insert a new element into the DOM**?
   **Ans**
   const newHistory = document.createElement("div");
   newHistory.textContent= "Hi";
   document.body.appendChild(newHistory);

3. What is **Event Bubbling** and how does it work?
   **Ans**
   Event bubbling is when an event starts from the innermost that triggered it and then moves up through its parent elements in the DOM hierarchy.
   Clicking a button inside a div triggers the buttons click event first, then the div's event, then body, and finally document

4. What is **Event Delegation** in JavaScript? Why is it useful?
   **Ans**
   - Event moves from inner element to outer elements is DOM hierarchy.
   - Using for Dynamic elements or reduce many listeners
   const parent = document.getElementById('parent');
   parent.addEventListener('click', function (event) {
   if (event.target.classList.contains('child')) {
      alert("clicked!");
     }
   });  

5. What is the difference between **preventDefault() and stopPropagation()** methods?
-`preventDefault()` Stops Default browser action 
-`stopPropagation()` Stops event from bubbling to parent elements.


