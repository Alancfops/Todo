const localStorageName = 'todo-list-ls';

function validateTask() {
  let values = JSON.parse(localStorage.getItem(localStorageName) || '[]');
  let inputValue = document.getElementById('input-task');
  let exist = values.find((j) => j.name == inputValue.value);
  return !exist ? false : true;
}

function newTask() {
  let input = document.getElementById('input-task');
  if (!input.value) {
    alert('Digite algo para listar como tarefa');
  } else if (validateTask()) {
    alert('Ja existe essa tarefa pendente');
  } else {
    let values = JSON.parse(localStorage.getItem(localStorageName) || '[]');
    values.push({
      name: input.value,
    });
    localStorage.setItem(localStorageName, JSON.stringify(values));
    showValues();
  }
  input.value = '';
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageName) || '[]');
  let list = document.getElementById('todo-list');
  list.innerHTML = '';
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i].name}<button id='btn-done' onclick='removeItem("${values[i].name}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg></button></li>`;
  }
}
function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageName) || '[]');
  let index = values.findIndex((j) => j.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageName, JSON.stringify(values));
  showValues();
}
showValues();
