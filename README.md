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

Ans : Event Bubbling means when an event happens on a child element but the event moves up to its 
        parent elements. Suppose there are add 2 event listeners for 2 buttons like parent and 
        child when click the child button than parent event is activate and that is called 
        the Event Bubbling .

4. What is Event Delegation in JavaScript? Why is it useful?

Ans : Event Delegation means when we add any event listener to a parent element to handling events for its 
         child elements. This Event Delegation is useful for saves memory and reduces multiple event listeners .


5. What is the difference between preventDefault() and stopPropagation()?

Ans : Here preventDefault() function is use for to stops the default browser behavior and 
       
       stopPropagation() function is use for to stops the Event Bubbling from child element to its parent 
        elements .













