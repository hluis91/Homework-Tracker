const form = document.querySelector(".add-hw-tasks")
form.addEventListener('submit', addAssignment)

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
    date.textContent = `Date due: ${assignment.dueDate}`
    const instruction = document.createElement("li")
    instruction.textContent = `Instructions: ${assignment.instructions}`
    const button = document.createElement("button")
    button.classList.add("delete-btn")
    button.textContent = "Delete Assignment"
    button.id = assignment.id
    button.addEventListener('click', () => {
      fetch(`http://localhost:3000/classAssignments/${assignment.id}`, {
        method: 'DELETE'
      })
      .then(() => div.remove())
    })
    div.append(header, subject, titles, date, instruction, button)
    assignmentCollection.append(div)
}

function getAssignments(){
  fetch("http://localhost:3000/classAssignments")
  .then(response => response.json())
  .then(data => data.forEach(assignment => showAssignment(assignment)))
}

getAssignments()

function addAssignment(event){
  event.preventDefault()
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
      form.reset()
}

const buttonChange = document.querySelector(".submit")

function mouseEnter(){
  buttonChange.style.background = 'yellow'
}

function mouseLeave(){
  buttonChange.style.background = ''
}

buttonChange.addEventListener("mouseenter", mouseEnter)
buttonChange.addEventListener("mouseleave", mouseLeave)


