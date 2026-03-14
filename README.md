1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : a. getElementById Selects an element using its id and 
         it returns one single element.
      
      b.  getElementsByClassName Selects an elements using a class name and
         it returns multiple elements means html collection .

      c.  querySelector Selects the first element that matches a CSS selector.

      d. querySelectorAll Selects all the elements that matches a CSS selector and
         it returns a node list .

2. How do you create and insert a new element into the DOM?

Ans : There are 3 main steps to create and insert a new element into the DOM and these are-
      
       a. Create the element into any const variable.
         const newDiv = document.createElement("div");

       b. Add the content in this newDiv which is create.
          newDiv.textContent = "Hello World";

       c.Insert this content div into the DOM.
          document.body.appendChild(newDiv);


3. What is Event Bubbling? How does it work?

Ans : 
















