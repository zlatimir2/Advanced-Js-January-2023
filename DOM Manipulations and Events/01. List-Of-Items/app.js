function addItem() {
    const text = document.getElementById('newItemText');

    const li = document.createElement('li');
    li.textContent = text.value;

    const list = document.getElementById('items');
    list.appendChild(li)

    text.value = ''

}