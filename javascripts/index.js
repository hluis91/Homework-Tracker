//Create a form variable to select the form id
const form = document.querySelector(".add-hw-tasks")
//Add a 'submit' eventListener to the form variable and pass addAssignment as a paramter
form.addEventListener('submit', addAssignment)


//GET request for db.json
function getAssignments(){
    fetch("http://localhost:3000/classAssignments")
    .then(response => response.json())
    .then(data => data.forEach(assignment => showAssignment(assignment)))
}

//Invoke Function getAssignments to show db.json objects on the DOM
getAssignments()


// This function will create a card that will have the information of each homework assignment that is in the db.json.
//It will also help with creating new assignments added to db.json
function showAssignment(assignment){
    const assignmentCollection = document.getElementById("task-collection")
    const div = document.createElement("div")
    div.classList.add("card")
    const header = document.createElement("h3")
    header.textContent = "Homework Assignment"
    const subject = document.createElement("li")
    subject.textContent = `Subject: ${assignment.classSubject}`
    const titles = document.createElement("li")
    titles.textContent = `Title: ${assignment.title}`
    const date = document.createElement("li")
    date.textContent = `Date: ${assignment.dueDate}`
    const instruction = document.createElement("li")
    instruction.textContent = `Instructions: ${assignment.instructions}`
    div.append(header, subject, titles, date, instruction)
    assignmentCollection.append(div)
}

//Creating the function addAssigment to create and POST homework assignments.
function addAssigment(event){
  event.preventDefault()
  // console.log("event", event)

  const [classSubject, title, dueDate, instructions] = event.target

  fetch("http://localhost:3000/classAssignments", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      classSubject: classSubject.value,
      title: title.value,
      dueDate: dueDate.value,
      instructions: instructions.value
    })
  })
  .then(response => response.json())
  .then(response => showAssignment(response))
}


