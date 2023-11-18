const pendingData = [
    { id: 1, task: 'Task 1', status: 'Pending' },
    { id: 2, task: 'Task 2', status: 'Pending' },
    // Add more data as needed
];

const completedData = [
    { id: 3, task: 'Task 3', status: 'Completed' },
    { id: 4, task: 'Task 4', status: 'Completed' },
    // Add more data as needed
];

// Function to show content based on the selected tab
function showTab(tabName) {
    const pendingTab = document.getElementById('pendingTab');
    const completedTab = document.getElementById('completedTab');

    if (tabName === 'Pending') {
        pendingTab.style.display = 'block';
        completedTab.style.display = 'none';
        renderTasks(pendingData, 'pendingTab');
    } else if (tabName === 'Completed') {
        pendingTab.style.display = 'none';
        completedTab.style.display = 'block';
        renderTasks(completedData, 'completedTab');
    }
}

// Function to render tasks in the specified tab
function renderTasks(data, tabId) {
    const tabContent = document.getElementById(tabId);
    tabContent.innerHTML = '';

    data.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `<p>${task.task}</p>`;
        tabContent.appendChild(taskElement);
    });
}

// Initial load
showTab('Pending');