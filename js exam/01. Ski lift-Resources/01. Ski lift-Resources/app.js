window.addEventListener('load', solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const peopleCountInput = document.getElementById('people-count');
  const dateInput = document.getElementById('from-date');
  const daysCountInput = document.getElementById('days-count');
  const ticketPreview = document.querySelector('.ticket-info-list')
  const confirmedTicket = document.querySelector('.confirm-ticket');



  let nextBtn = document.getElementById('next-btn')
  nextBtn.addEventListener('click', nextStep)




  function nextStep(event) {
    event.preventDefault();



    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    const peopleCount = peopleCountInput.value
    const date = dateInput.value
    const daysCount = daysCountInput.value

    if (firstName == "" || lastName == "" || peopleCount == '' || date == '' || daysCount == '') {
      return;
    }



    const element = document.createElement('li');
    element.innerHTML = `<article>
    <h3>Name: ${firstName}</h3>
    <p>From date: ${date}</p>
    <p>For ${daysCount} days</p>
    <p>For ${peopleCount} people</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="continue-btn">Continue</button>`

    ticketPreview.appendChild(element);
    onReset()
    nextBtn.disabled = true;

    const editButton = document.querySelector('.edit-btn').addEventListener('click', returningValues);
    const continueButton = document.querySelector('.continue-btn').addEventListener('click', confirmingTicket);


    function returningValues(e) {
      e.preventDefault();
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      peopleCount.value = peopleCount;
      date.value = date;
      daysCountInput.value = daysCount;

      nextBtn.disabled = false;
      element.remove()

    }

    function confirmingTicket(event) {
      event.preventDefault();

      element.remove()


      const confirmed = document.createElement('li');
      confirmed.innerHTML = `<article>
      <h3>Name: ${firstName}</h3>
      <p>From date: ${date}</p>
      <p>For ${daysCount} days</p>
      <p>For ${peopleCount} people</p>
      </article>
      <button class="confirm-btn">Confirm</button>
      <button class="cancel-btn">Cancel</button>`

      confirmedTicket.appendChild(confirmed);

      const confirmButton = document.querySelector('.confirm-btn').addEventListener('click', confirming)
      const cancelButton = document.querySelector('.cancel-btn').addEventListener('click', cancelling)
      function cancelling(event) {
        event.preventDefault();
        confirmed.remove();
        nextBtn.disabled = false;



      }
      function confirming(event) {
        event.preventDefault()
        const mainDiv = document.getElementById('main');
        mainDiv.remove();


        const thankyou = document.createElement('h1');
        thankyou.innerHTML = `<h1 id='thank you'>Thank you, have a nice day!</h1>
        <button id=back-btn>Back</button>`

        document.getElementById('back-btn').addEventListener('click', () => {
          window.location.reload();
        })
      }



    }



  }

  function onReset() {
    firstNameInput.value = ''
    lastNameInput.value = ''
    peopleCountInput.value = ''
    dateInput.value = ''
    daysCountInput.value = ''

  }
}




