// Dropdown Click
let dropdowns = document.getElementsByClassName('dropdown-title');

for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('click', (e) => {
    let category = e.target.parentNode.value;

    let optionsDiv = document.getElementById('options-' + category);
    let sideBarDiv = document.getElementById('li-' + category);

    optionsDiv.classList.toggle('hide');
    sideBarDiv.classList.toggle('open');
  });
}

// Option Click
let options = document.getElementsByClassName('option-card');

for (let j = 0; j < options.length; j++) {
  let selection = options[j];
  selection.addEventListener('click', (e) => {
    console.log(selection.value);

    if (selection.value === 'capsule') {
      // Call handle active class function
      handleActive(selection, options, 1, 2);

      // Disable want us to grind them question
      document.getElementById('grindEmBtn').disabled = true;
      document.getElementById('options-grind').classList.add('hide');
      document.getElementById('li-grind').classList.remove('open');

      // Remove type if already clicked
      options[9].classList.remove('active');
      options[10].classList.remove('active');
      options[11].classList.remove('active');

      // Update summary
      document.getElementById('using').innerHTML = 'using';
      document.getElementById('groundAla').innerHTML = '';
      document.getElementById('grind').innerHTML = '';

      // Call update text function
      changeText('pref', selection.value + 's');
    } else if (selection.value === 'filter') {
      // Call handle active class function
      handleActive(selection, options, 0, 2);

      // Enable want us to grind them question
      document.getElementById('grindEmBtn').disabled = false;

      // Update summary
      document.getElementById('using').innerHTML = 'as ';
      document.getElementById('groundAla').innerHTML = 'ground ala ';
      if (document.getElementById('grind').innerHTML === '') {
        document.getElementById('grind').innerHTML = '____';
      }

      // Call update text function
      changeText('pref', selection.value);
    } else if (selection.value === 'espresso') {
      // Call handle active class function
      handleActive(selection, options, 0, 1);

      // Enable want us to grind them question
      document.getElementById('grindEmBtn').disabled = false;

      // Update summary
      document.getElementById('using').innerHTML = 'as ';
      document.getElementById('groundAla').innerHTML = 'ground ala ';
      if (document.getElementById('grind').innerHTML === '') {
        document.getElementById('grind').innerHTML = '____';
      }

      // Call update text function
      changeText('pref', selection.value);
    } else if (selection.value === 'single') {
      handleActive(selection, options, 4, 5);
      changeText('type', selection.value);
    } else if (selection.value === 'decaf') {
      handleActive(selection, options, 3, 5);
      changeText('type', selection.value);
    } else if (selection.value === 'blended') {
      handleActive(selection, options, 3, 4);
      changeText('type', selection.value);
    } else if (selection.value === '250') {
      handleActive(selection, options, 7, 8);
      changeText('quant', selection.value + 'g');
    } else if (selection.value === '500') {
      handleActive(selection, options, 6, 8);
      changeText('quant', selection.value + 'g');
    } else if (selection.value === '1000') {
      handleActive(selection, options, 6, 7);
      changeText('quant', selection.value + 'g');
    } else if (selection.value === 'wholebean') {
      handleActive(selection, options, 10, 11);
      changeText('grind', selection.value);
    } else if (selection.value === 'filtered') {
      handleActive(selection, options, 9, 11);
      changeText('grind', selection.value.slice(0, 6));
    } else if (selection.value === 'cafetiere') {
      handleActive(selection, options, 9, 10);
      changeText('grind', selection.value);
    } else if (selection.value === 'weekly') {
      handleActive(selection, options, 13, 14);
      changeText('freq', 'Every Week');
    } else if (selection.value === 'biweekly') {
      handleActive(selection, options, 12, 14);
      changeText('freq', 'Every 2 Weeks');
    } else if (selection.value === 'monthly') {
      handleActive(selection, options, 12, 13);
      changeText('freq', 'Every Month');
    } else {
      console.log('NOOOOPE!');
    }
  });
}

// Make selection cyan, others grey
const handleActive = (element, elementArr, num1, num2) => {
  element.classList.add('active');
  elementArr[num1].classList.remove('active');
  elementArr[num2].classList.remove('active');
};

// Update summary
const changeText = (element, newText) => {
  let capNewText = newText[0].toUpperCase() + newText.slice(1);
  document.getElementById(element).innerHTML = capNewText;
};
