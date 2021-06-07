// Dropdown Click
let dropdowns = document.getElementsByClassName('dropdown-title');

for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('click', (event) => {
    let category = event.target.parentNode.value;

    let optionsDiv = document.getElementById('options-' + category);
    let sideBarDiv = document.getElementById('li-' + category);

    optionsDiv.classList.toggle('hide');
    sideBarDiv.classList.toggle('open');
  });
}

// Option Click
let options = document.getElementsByClassName('option-card');

for (let j = 0; j < options.length; j++) {
  options[j].addEventListener('click', (event) => {
    options[j].classList.toggle('active');
  });
}
