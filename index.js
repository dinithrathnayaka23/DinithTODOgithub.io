
const inputField = document.getElementById('todo-input');
const addItemButton = document.getElementById('add-item');
const removeItemButton = document.getElementById('remove-item');
const todoList = document.getElementById('todo-list');

addItemButton.addEventListener('click', () => {
  const itemText = inputField.value.trim();
  if (itemText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    
    listItem.addEventListener('click', () => {
      listItem.classList.toggle('selected');
    });

    todoList.appendChild(listItem);
    inputField.value = ''; 
  }
  else {
    alert('Please enter a valid item.');
  }
});


removeItemButton.addEventListener('click', () => {
  const selectedItems = document.querySelectorAll('li.selected');
  selectedItems.forEach(item => item.remove());
});
