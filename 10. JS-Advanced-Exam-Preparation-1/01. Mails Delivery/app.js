function solve() {
  const nameInput = document.getElementById('recipientName');
  const titleInput = document.getElementById('title')
  const messageInput = document.getElementById('message')
  const list = document.getElementById('list')

  document.getElementById('add').addEventListener('click', createMail);
  document.getElementById('reset').addEventListener('click', onReset);

  function createMail(event) {
    event.preventDefault();
    const name = nameInput.value;
    const title = titleInput.value;
    const message = messageInput.value;

    if (name == '' || title == '' || message == '') {
      return;
    }
    const element = document.createElement('li');
    element.innerHTML = `<h4>Title: ${title}</h4>
    <h4>Recipient Name: ${name}</h4>
    <span>${message}</span>
    <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
    </div>`

    list.appendChild(element);

    onReset(event)

    document.getElementById('delete').addEventListener('click', deleteMail);

    let deleteList = document.querySelector('.delete-list')

    function deleteMail(event) {
      event.preventDefault();

      const deletedMailElement = document.createElement('li');
      deletedMailElement.innerHTML = `<span>To: ${name}</span>
      <span>Title: ${title}</span>`

      deleteList.appendChild(deletedMailElement);

      element.remove();





    }

    document.getElementById('send').addEventListener('click', sendMessage);

    let sendList = document.querySelector('.sent-list')

    function sendMessage(event) {
      event.preventDefault();

      const sentListEl = document.createElement('li');
      sentListEl.innerHTML = `<span>To: ${name}</span>
      <span>Title: ${title}</span>
      <div class="btn">
          <button type="submit" class="delete">Delete</button>
      </div>`

      sendList.appendChild(sentListEl);

      element.remove();

      sentListEl.querySelector('.delete').addEventListener('click', () => {
        const deletedMailElement = document.createElement('li');
        deletedMailElement.innerHTML = `<span>To: ${name}</span>
        <span>Title: ${title}</span>`;

        deleteList.appendChild(deletedMailElement);
        sentListEl.remove();

      });




    }

  }
  function onReset(event) {
    event.preventDefault();
    nameInput.value = '';
    titleInput.value = '';
    messageInput.value = '';
  }

}
solve()