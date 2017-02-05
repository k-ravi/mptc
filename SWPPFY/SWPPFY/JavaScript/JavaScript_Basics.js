﻿//JavaScript is a programming language that addes interactively to your website

var myHeading = document.querySelector("h1"); //queryselector returns the first element with in the document that matches the specific group of selectors

//Notes
//Returns null if no matches are found; otherwise, it returns the first matching element.

//If the selector matches an ID and this ID is erroneously used several times in the document, it returns the first matching element.

//Throws a SYNTAX_ERR exception if the specified group of selectors is invalid.

//querySelector() was introduced in the Selectors API.

//The string argument pass to querySelector must follow the CSS syntax.

//CSS Pseudo-elements will never return any elements, as specified in the Selectors API

myHeading.textContent = 'Hello world!';//textContent property represents the text content of a node and its descendants.
//Description
//textContent returns null if the element is a document, a document type, or a notation. To grab all of the text and CDATA data for the whole document, one could use document.documentElement.textContent.
//If the node is a CDATA section, a comment, a processing instruction, or a text node, textContent returns the text inside this node (the nodeValue).
//For other node types, textContent returns the concatenation of the textContent property value of every child node, excluding comments and processing instruction nodes. This is an empty string if the node has no children.
//Setting this property on a node removes all of its children and replaces them with a single text node with the given value.
//Differences from innerText

//Internet Explorer introduced element.innerText. The intention is similar but with the following differences:

//While textContent gets the content of all elements, including <script> and <style> elements, the IE-specific property innerText does not.
//innerText is aware of style and will not return the text of hidden elements, whereas textContent will.
//As innerText is aware of CSS styling, it will trigger a reflow, whereas textContent will not.
//Unlike textContent, altering innerText in Internet Explorer (up to version 11 inclusive) not just removes child nodes from the element, but also permanently destroys all descendant text nodes (so it is impossible to insert the nodes again into any other element or into the same element anymore).
