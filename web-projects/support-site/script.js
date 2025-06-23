// Affirmations array
const affirmations = [
    "I am capable of achieving great things.",
    "I choose to be confident and strong.",
    "I am worthy of love and respect.",
    "I have the power to create positive change.",
    "I am resilient and can overcome any challenge.",
    "I trust in my abilities and intuition.",
    "I am surrounded by love and support.",
    "I am becoming better every single day.",
    "I deserve happiness and success.",
    "I am enough, just as I am.",
    "I have the courage to face my fears.",
    "I am proud of who I am becoming.",
    "I attract positivity into my life.",
    "I am in control of my thoughts and emotions.",
    "I am a beautiful person inside and out."
];

// Quotes and jokes array
const quotesAndJokes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Why don't scientists trust atoms? Because they make up everything! 😄",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "What do you call a fake noodle? An impasta! 🍝",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "What do you call a bear with no teeth? A gummy bear! 🐻",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Why don't eggs tell jokes? They'd crack each other up! 🥚",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "What do you call a dinosaur that crashes his car? Tyrannosaurus wrecks! 🦖",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Why did the math book look so sad? Because it had too many problems! 📚",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
];

// Mad Libs templates
const madLibsTemplates = [
    "The {adjective} {noun} decided to {verb} through the magical forest.",
    "Once upon a time, there was a {adjective} {noun} who loved to {verb}.",
    "The {noun} was so {adjective} that it started to {verb} uncontrollably.",
    "In a {adjective} castle, the {noun} learned how to {verb}.",
    "The {adjective} {noun} surprised everyone when it began to {verb}.",
    "Deep in the {adjective} jungle, a {noun} was trying to {verb}.",
    "The {noun} felt very {adjective} and wanted to {verb}.",
    "A {adjective} {noun} appeared and began to {verb}.",
    "The {noun} became {adjective} and started to {verb}.",
    "In the {adjective} garden, the {noun} decided to {verb}."
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    newAffirmation();
    newQuoteJoke();
    loadTasks();
    
    // Add breathing animation to mental health section
    const mentalHealthSection = document.getElementById('mental-health');
    mentalHealthSection.classList.add('breathing');
});

// Affirmations functionality
function newAffirmation() {
    const affirmationText = document.getElementById('affirmation-text');
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    affirmationText.textContent = randomAffirmation;
    
    // Add a subtle animation
    affirmationText.style.transform = 'scale(1.05)';
    setTimeout(() => {
        affirmationText.style.transform = 'scale(1)';
    }, 200);
}

// Quotes and jokes functionality
function newQuoteJoke() {
    const quoteJokeText = document.getElementById('quote-joke-text');
    const randomQuoteJoke = quotesAndJokes[Math.floor(Math.random() * quotesAndJokes.length)];
    quoteJokeText.textContent = randomQuoteJoke;
    
    // Add a subtle animation
    quoteJokeText.style.transform = 'scale(1.05)';
    setTimeout(() => {
        quoteJokeText.style.transform = 'scale(1)';
    }, 200);
}

// To-do list functionality
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
    
    // Save to localStorage
    saveTasks();
}

function toggleTask(element) {
    element.parentElement.classList.toggle('completed');
    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    
    taskList.querySelectorAll('li').forEach(li => {
        const text = li.querySelector('span').textContent;
        const completed = li.classList.contains('completed');
        tasks.push({ text, completed });
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const savedTasks = localStorage.getItem('tasks');
    
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            const li = document.createElement('li');
            if (task.completed) li.classList.add('completed');
            li.innerHTML = `
                <span onclick="toggleTask(this)">${task.text}</span>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }
}

// Mad Libs functionality
function createMadLib() {
    const noun = document.getElementById('noun').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const result = document.getElementById('madlib-result');
    
    if (!noun || !verb || !adjective) {
        result.textContent = 'Please fill in all the blanks!';
        return;
    }
    
    const template = madLibsTemplates[Math.floor(Math.random() * madLibsTemplates.length)];
    const story = template
        .replace('{noun}', noun)
        .replace('{verb}', verb)
        .replace('{adjective}', adjective);
    
    result.textContent = story;
    
    // Clear inputs
    document.getElementById('noun').value = '';
    document.getElementById('verb').value = '';
    document.getElementById('adjective').value = '';
    
    // Add a subtle animation
    result.style.transform = 'scale(1.05)';
    setTimeout(() => {
        result.style.transform = 'scale(1)';
    }, 200);
}

// Add keyboard support for to-do list
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Add keyboard support for mad libs
document.getElementById('noun').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('verb').focus();
    }
});

document.getElementById('verb').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('adjective').focus();
    }
});

document.getElementById('adjective').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        createMadLib();
    }
}); 