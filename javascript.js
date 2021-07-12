let headTag = document.createElement("h1");                 // Create a <li> node
let headText = document.createTextNode("Joe Renteria");         // Create a text node
headTag.appendChild(headText);                              // Append the text to <li>
document.getElementsByClassName("header").appendChild(headTag);     // Append <li> to <ul> with id="myList"