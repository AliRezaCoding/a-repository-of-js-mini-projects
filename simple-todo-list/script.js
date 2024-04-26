'use strict';

const inputToDo = document.querySelector('.to-do-input');
const toDoContainer = document.querySelector('.to-do-list');
const btnclear = document.querySelector('.clear');

/////////////////////////////////

class App {
    // For Deleting Done Tasks & Restoring 
    #taskElements = [];

    constructor(){
        inputToDo.addEventListener('keydown', this.#newToDo.bind(this));
        btnclear.addEventListener('click', this.#clearTasks.bind(this));

    }

    #newToDo (e) {
        if (e.code === 'Enter'){
        if(!inputToDo.value) return; 

            // Create New Task
            const task = inputToDo.value;
            
            this.#renderNewTask(task);

            // Clear Input Field
            inputToDo.value = '';
        }
    }
    
    #renderNewTask(task) {
        // Create Element
        const li = document.createElement('li');
        li.classList.add('to-do');
        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.classList.add('to-do-done');
        const span = document.createElement('span');
        span.classList.add('to-do-text')
        span.innerHTML = task;

        li.appendChild(inputCheckbox);
        li.appendChild(span);

        // Add Element Into TaskElement Array
        this.#taskElements.push(li);

        // Display Element In DOM
        toDoContainer.appendChild(li);
    }

    #clearTasks () {
        this.#taskElements.filter(task =>  task.querySelector('input').checked)
        .forEach(taskDone => taskDone.remove());

        // Updating TaskElement Array
        this.#taskElements = this.#taskElements.filter(task => 
            !(task.querySelector('input').checked)
        );
    }
}

const app = new App();

