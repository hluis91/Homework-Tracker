# Project Overview

### This project tracks homework for students. It creates cards that hold the following information:
* The subject of the class.
* The title of the homework assignment.
* The date that the assignment is due.
* Instructions for the specific assignment.
* A delete button for the card.

![Screenshot 2022-11-30 141203](https://user-images.githubusercontent.com/100493586/204949231-4264a071-2e1d-4e6e-8020-e40cdb7b1943.png)

#
### First, copy this repository into your terminal. In order to use this application you must globally install a j-son server. If you do not have that installed, here is the command that you can put in your terminal:
* $ npm install -g json-server

### After you install the server, you can run this command to start the server:
* $ json-server --watch db.json

### After the server has started open up the application on your web browser.
#
### This application has the following files:
* index.js (javascript file)
* index.css (styling file)
* db.json (collection of data)
* index.html (website layout)

#
### There are 5 functions and 4 event listeners:
## Functions:
* showAssignment()
* getAssignments()
* addAssignment()
* mouseEnter()
* mouseLeave()
## Event Listeners:
* 'Click' event.
* 'Submit' event.
* 'Mouseenter' event.
* 'Mouseleave' event.

#
## Purpose of Functions and Event Listeners:
* The showAssignment function creates cards that will be added to the container that hold the homework assignments. Within this function there is the 'click' event listener that passes an anonymous function to delete the cards in which it also contains a DELETE request to get rid of elements from the db.json file.
* The getAssignments function consists of a GET request to retrieve the objects from the array of objects found in the bd.json file. It iterates throgh the array using the forEach iteration method. It iterates through the cards from the showAssignment function.
* The addAssignment function consists of a POST request which creates new cards and adds them to the container holding the card homework assignments. I added a 'submit' event listener to the form of the HTML file in which the unique callback function is addAssignment. This event listener activates when the 'Create Assignment' button from the form is clicked on the application after the homework assignment information is typed in their respective fields. 
* The mouseEnter function is a function that highlights the 'Create Assignment' button yellow when you put your mouse over the button. I added the event listener of the type 'mouseenter' that passes this function as the unique callback function.
* The mouseLeave function is a function that does the opposite of the mouseEnter function in which it returns the 'Create Assignment' back to its original state before it was highlighted yellow. I added and event listener of the type 'mouseleave' to the 'Create Assignment' button in which it passes the callback function mouseLeave.
#
## Next steps:
### I would like to add more functions to this application in the future when I develop my skills. Some features I want to add are:
* Add a check to each card to label if a assignment is complete or incomplete.
* Have the card to turn around and see any other information that is needed for the assignment.
* Rearrange the order of the cards through drag and drop.
* Return a deleted card if the card was deleted by mistake.
#
## Acknowledgements
### Thank you for taking your time to look at my project, if there are any questions please feel free to reach out and ask!
