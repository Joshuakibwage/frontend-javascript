interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "Alice",
    lastName: "Waithera",
    age: 20,
    location: "Nairobi",
}

const student2: Student = {
    firstName: "Paul",
    lastName: "Kimani",
    age: 28,
    location: "Machakos",
}

//add them into an array

const studentsList: Student[] = [student1, student2];

//create a table using vanilla js

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);