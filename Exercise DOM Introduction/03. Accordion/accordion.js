function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let extraText = document.getElementById('extra')

    if (button.textContent == 'More') {
        extraText.style.display = 'block';
        button.textContent = 'Less'
    } else {
        extraText.style.display = 'none';
        button.textContent = 'More'
    }

}