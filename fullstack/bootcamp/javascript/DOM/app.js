//Documentation for the use of DOM (Document Object Model) in JavaScript

//To get elements using DOM:

//Other ways:
document.body //returns the body element
document.head //returns the head element
document.documentElement //returns the document element

//Best way:
document.getElementById('id') //returns the element with the specified id
document.getElementsByClassName('class') //returns a collection of elements with the specified class
document.getElementsByTagName('tag') //returns a collection of elements with the specified tag
document.querySelector('selector') //returns the first element that matches the specified selector
document.querySelectorAll('selector') //returns a collection of elements that matches the specified selector

//DOM Manipulation:

//Create elements in the DOM and atributes to a variable:
/*let element = */ document.createElement('tag') //creates an element with the specified tag
/*let element = */ document.createTextNode('text') //creates a text node with the specified text

//Insert elements in the DOM ()
/*element*/.append('element') //inserts the specified element as the last child of the element
/*element*/.prepend('element') //inserts the specified element as the first child of the element
/*element*/.before('element') //inserts the specified element as the previous sibling of the element

//Remove elements from the DOM
/*element*/.remove() //removes the element
/*element*/.removeChild('element') //removes the specified child element

//Replace elements in the DOM
/*element*/.replaceWith('element') //replaces the element with the specified element
















//Add and remove classes from elements
/*element*/.classList.add('class') //adds the specified class to the element
/*element*/.classList.remove('class') //removes the specified class from the element
/*element*/.classList.toggle('class') //toggles the specified class on the element

//Add and remove attributes from elements
/*element*/.setAttribute('attribute', 'value') //adds the specified attribute to the element
/*element*/.removeAttribute('attribute') //removes the specified attribute from the element

//Get and set the value of attributes from elements
/*element*/.getAttribute('attribute') //returns the value of the specified attribute
/*element*/.setAttribute('attribute', 'value') //sets the value of the specified attribute

//Get and set the value of properties from elements
/*element*/.property //returns the value of the specified property
/*element*/.property = 'value' //sets the value of the specified property

//Get and set the value of styles from elements
/*element*/.style.property //returns the value of the specified style
/*element*/.style.property = 'value' //sets the value of the specified style







