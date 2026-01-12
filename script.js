const input = document.querySelector('#habit-input');
const addButton = document.querySelector('#add-btn');
const habitList = document.querySelector('#habit-list');


button.addEventListener("click", function() {console.log(input.value);});
addButton.addEventListener('click', function() {
    const habitText = input.value;
    
    if (habitText === '') return; // ignore empty input

    const li = document.createElement('li');
    li.textContent = habitText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.prepend(checkbox);

    habitList.appendChild(li);

    input.value = '';
});

button.addEventListener("click", function() {console.log(input.value);});
addButton.addEventListener('click', function() {
    const habitText = input.value;

    if (habitText === '') return; // ignore empty input

    const li = document.createElement('li');
    li.textContent = habitText;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.prepend(checkbox);
    habitList.appendChild(li);
    input.value = '';
});