// Sample data (you would interact with a RESTful API in a real project)
let records = [];

// Function to display records
function displayRecords() {
    const recordsDiv = document.getElementById('records');
    recordsDiv.innerHTML = '';

    records.forEach((record, index) => {
        const recordDiv = document.createElement('div');
        recordDiv.className = 'record';
        recordDiv.innerHTML = `
            <span>Name: ${record.name}</span>
            <span>Email: ${record.email}</span>
            <button onclick="editRecord(${index})">Edit</button>
            <button onclick="deleteRecord(${index})">Delete</button>
        `;
        recordsDiv.appendChild(recordDiv);
    });
}

// Function to add a new record
function addRecord(name, email) {
    records.push({ name, email });
    displayRecords();
}

// Function to edit a record
function editRecord(index) {
    const record = records[index];
    const name = prompt('Edit Name:', record.name);
    const email = prompt('Edit Email:', record.email);
    if (name !== null && email !== null) {
        record.name = name;
        record.email = email;
        displayRecords();
    }
}

// Function to delete a record
function deleteRecord(index) {
    const confirmDelete = confirm('Are you sure you want to delete this record?');
    if (confirmDelete) {
        records.splice(index, 1);
        displayRecords();
    }
}

// Form submit event
document.getElementById('crud-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        addRecord(name, email);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

// Initial display
displayRecords();