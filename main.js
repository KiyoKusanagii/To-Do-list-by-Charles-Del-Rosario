// script.js
document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const dateInput = document.getElementById('task-date'); // Get date input
    const taskList = document.getElementById('task-list');

    // Get task and date values
    const taskText = taskInput.value;
    const taskDate = dateInput.value;

    if (taskText && taskDate) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span> 
            <span class="task-date">${taskDate}</span> 
            <button class="edit-task">Edit</button>
            <button class="delete-task">Delete</button>
        `;
        
        // Append new task to the list
        taskList.appendChild(listItem);
        
        // Clear the input fields
        taskInput.value = '';
        dateInput.value = ''; // Clear date input
    } else {
        alert('Please enter a task and a date.');
    }
});
