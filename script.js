document.addEventListener("DOMContentLoaded", function() {
    
    //const startingMinutes = 10;
    //let time = startingMinutes * 60; //gets seconds
    const pomodoro = 25;
    const pomodoros = pomodoro * 60;
    const short = 1;
    const shorts = short * 60;
    const long = 10;
    const longs = long * 60;
    let timerInterval; //interval ID
    let timeLeft = 0;
    let elapsedTime = 0;

    const countdown = document.getElementById('countdown');
    
    //pomodoro button timer
    const pomodoroB = document.getElementById('pomodoro');
    pomodoroB.addEventListener('click', startPomodoro);
    function startPomodoro() {
        clearInterval(timerInterval);
        timeLeft = pomodoros;
        timerInterval = setInterval(function() {
            updateCountdown(timeLeft);
            timeLeft--;
            elapsedTime++;
            if (timeLeft < 0) {
                clearInterval(timerInterval);
            }
        }
        , 1000);
    }

    //short break button timer
    const shortB = document.getElementById('short');
    shortB.addEventListener('click', startShort);
    function startShort() {
        clearInterval(timerInterval);
        timeLeft = shorts;
        timerInterval = setInterval(function() {
            updateCountdown(timeLeft);
            timeLeft--;
            elapsedTime++;
            if (timeLeft < 0) {
                clearInterval(timerInterval);
            }
        }
        , 1000);
    }

    //long break button timer
    const longB = document.getElementById('long');
    longB.addEventListener('click', startLong);
    function startLong() {
        clearInterval(timerInterval);
        timeLeft = longs;
        timerInterval = setInterval(function() {
            updateCountdown(timeLeft);
            timeLeft--;
            elapsedTime++;
            if (timeLeft < 0) {
                clearInterval(timerInterval);
            }
        }
        , 1000);
    }

    function updateCountdown(time) {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds: seconds;
        countdown.innerHTML = `${minutes}:${seconds}`;
        //time--;
    }

    //pause
    const pause = document.getElementById('pauseB');
    pause.addEventListener('click', pauseTime)
    
    function pauseTime() {
        clearInterval(timerInterval);
    }

    //play
    const resume = document.getElementById('resumeB');
    resume.addEventListener('click', resumeTime)

    function resumeTime() {
        timerInterval = setInterval(function() {
            if (timeLeft == 0) {
                return;
            }
            updateCountdown(timeLeft);
            timeLeft--;
        }
        , 1000);
    }
    
    //reset
    const reset = document.getElementById('resetB');

});

//todolist

function addTask() {
    var inputValue = document.getElementById("taskInput").value;
    if (inputValue === '') {
      alert("Please enter a task!");
      return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));

    var deleteButton = createDeleteButton();
    li.appendChild(deleteButton);
    ul.appendChild(li);

    var editButton = createEditButton();
    li.appendChild(editButton);
    ul.appendChild(li);

    // Clear the input
    document.getElementById("taskInput").value = '';

    
    var todolistContainer = document.getElementById('taskList');
    if (ul.children.length > 0) {
        todolistContainer.style.display = 'block';
    } else {
        todolistContainer.style.display = 'none';
    }
    editTask();
    deleteTask();
}

function createEditButton() {
    var editButton = document.createElement('button');
    editButton.innerHTML = '<i class="bi bi-pencil"></i>';
    editButton.classList.add('edit-btn');
    return editButton;
}

function editTask() {
    var editButtons = document.querySelectorAll('.edit-btn');

    editButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var listItem = this.parentElement;
            var taskText = listItem.firstChild.nodeValue.trim();

            // Create an input field for editing
            var inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = taskText;

            // Replace the task text with the input field
            listItem.firstChild.replaceWith(inputField);

            // Focus on the input field
            inputField.focus();

            // Handle blur event and Enter key press
            function completeEditing() {
                // Update the task if the user entered a new task
                var editedTask = inputField.value.trim();
                if (editedTask !== null && editedTask !== '') {
                    listItem.firstChild.nodeValue = editedTask;
                }

                // Replace the input field with the edited task text
                inputField.replaceWith(listItem.firstChild);

                // Remove the event listeners after completing editing
                inputField.removeEventListener('blur', completeEditing);
                inputField.removeEventListener('keydown', handleKeyDown);
            }

            function handleKeyDown(event) {
                if (event.key === 'Enter') {
                    event.preventDefault(); // Prevent the default Enter behavior (e.g., form submission)
                    completeEditing();
                }
            }

            inputField.addEventListener('blur', completeEditing);
            inputField.addEventListener('keydown', handleKeyDown);
        });
    });
}

function createDeleteButton(){
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
    deleteButton.classList.add('delete-btn');
    return deleteButton;
}

function deleteTask() {
    var deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var listItem = this.parentElement;
            listItem.remove();

            // Check if there are no tasks left to hide the container
            var todolistContainer = document.getElementById('taskList');
            if (todolistContainer.children.length === 0) {
                todolistContainer.style.display = 'none';
            }
        });
    });
}



