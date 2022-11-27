function showAssignment(){
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