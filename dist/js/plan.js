// Dropdown Click
let dropdowns = document.getElementsByClassName('dropdown-title');

for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].onclick = (e) => {
    let category = e.target.parentNode.value;

    let optionsDiv = document.getElementById('options-' + category);
    let sideBarDiv = document.getElementById('li-' + category);

    optionsDiv.classList.toggle('hide');
    sideBarDiv.classList.toggle('open');
  };
}

// Option Click
let options = document.getElementsByClassName('option-card');

for (let j = 0; j < options.length; j++) {
  let selection = options[j];
  selection.onclick = (e) => {
    if (selection.value === 'capsule') {
      // Call handle active class function
      handleActive(selection, options, 1, 2);

      // Disable want us to grind them question
      document.getElementById('grindEmBtn').disabled = true;
      document.getElementById('grindEmBtn').style = 'cursor: not-allowed;';
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

      // Update Modal
      document.getElementById('modal-using').innerHTML = 'using';
      document.getElementById('modal-groundAla').innerHTML = '';
      document.getElementById('modal-grind').innerHTML = '';

      // Call update text function
      changeText('pref', selection.value + 's');
      changeText('modal-pref', selection.value + 's');
    } else if (selection.value === 'filter') {
      // Call handle active class function
      handleActive(selection, options, 0, 2);

      // Enable want us to grind them question
      document.getElementById('grindEmBtn').disabled = false;
      document.getElementById('grindEmBtn').style = 'cursor: pointer;';

      // Update summary
      document.getElementById('using').innerHTML = 'as ';
      document.getElementById('groundAla').innerHTML = 'ground ala ';
      if (document.getElementById('grind').innerHTML === '') {
        document.getElementById('grind').innerHTML = '____';
      }

      // Updat modal
      document.getElementById('modal-using').innerHTML = 'as ';
      document.getElementById('modal-groundAla').innerHTML = 'ground ala ';
      if (document.getElementById('modal-grind').innerHTML === '') {
        document.getElementById('modal-grind').innerHTML = '____';
      }

      // Call update text function
      changeText('pref', selection.value);
      changeText('modal-pref', selection.value);
    } else if (selection.value === 'espresso') {
      // Call handle active class function
      handleActive(selection, options, 0, 1);

      // Enable want us to grind them question
      document.getElementById('grindEmBtn').disabled = false;
      document.getElementById('grindEmBtn').style = 'cursor: pointer;';

      // Update summary
      document.getElementById('using').innerHTML = 'as ';
      document.getElementById('groundAla').innerHTML = 'ground ala ';
      if (document.getElementById('grind').innerHTML === '') {
        document.getElementById('grind').innerHTML = '____';
      }

      // Update modal
      document.getElementById('modal-using').innerHTML = 'as ';
      document.getElementById('modal-groundAla').innerHTML = 'ground ala ';
      if (document.getElementById('modal-grind').innerHTML === '') {
        document.getElementById('modal-grind').innerHTML = '____';
      }

      // Call update text function
      changeText('pref', selection.value);
      changeText('modal-pref', selection.value);
    } else if (selection.value === 'single') {
      handleActive(selection, options, 4, 5);
      changeText('type', selection.value);
      changeText('modal-type', selection.value);
    } else if (selection.value === 'decaf') {
      handleActive(selection, options, 3, 5);
      changeText('type', selection.value);
      changeText('modal-type', selection.value);
    } else if (selection.value === 'blended') {
      handleActive(selection, options, 3, 4);
      changeText('type', selection.value);
      changeText('modal-type', selection.value);
    } else if (selection.value === '250') {
      handleActive(selection, options, 7, 8);
      changeText('quant', selection.value + 'g');
      changeText('modal-quant', selection.value + 'g');
    } else if (selection.value === '500') {
      handleActive(selection, options, 6, 8);
      changeText('quant', selection.value + 'g');
      changeText('modal-quant', selection.value + 'g');
    } else if (selection.value === '1000') {
      handleActive(selection, options, 6, 7);
      changeText('quant', selection.value + 'g');
      changeText('modal-quant', selection.value + 'g');
    } else if (selection.value === 'wholebean') {
      handleActive(selection, options, 10, 11);
      changeText('grind', selection.value);
      changeText('modal-grind', selection.value);
    } else if (selection.value === 'filtered') {
      handleActive(selection, options, 9, 11);
      changeText('grind', selection.value.slice(0, 6));
      changeText('modal-grind', selection.value.slice(0, 6));
    } else if (selection.value === 'cafetiere') {
      handleActive(selection, options, 9, 10);
      changeText('grind', selection.value);
      changeText('modal-grind', selection.value);
    } else if (selection.value === 'weekly') {
      handleActive(selection, options, 13, 14);
      changeText('freq', 'Every Week');
      changeText('modal-freq', 'Every Week');
    } else if (selection.value === 'biweekly') {
      handleActive(selection, options, 12, 14);
      changeText('freq', 'Every 2 Weeks');
      changeText('modal-freq', 'Every 2 Weeks');
    } else if (selection.value === 'monthly') {
      handleActive(selection, options, 12, 13);
      changeText('freq', 'Every Month');
      changeText('modal-freq', 'Every Month');
    } else {
      console.log('NOOOOPE!');
    }
  };
}

// Modal Open/Close
let modal = document.getElementById('my-modal');
let createPlanBtn = document.getElementById('create-plan-btn');
let checkoutBtn = document.getElementById('checkout-btn');
let mobileCheckoutBtn = document.getElementById('mobile-checkout-btn');

createPlanBtn.onclick = () => {
  let quantity = document.getElementById('quant').innerHTML;
  let frequency = document.getElementById('freq').innerHTML;
  let cost = 0;

  switch (quantity) {
    case '250g':
      switch (frequency) {
        case 'Every Week':
          cost = 7.2 * 4;
          break;
        case 'Every 2 Weeks':
          cost = 9.6 * 2;
          break;
        default:
          cost = 12;
      }
      break;
    case '500g':
      switch (frequency) {
        case 'Every Week':
          cost = 13 * 4;
          break;
        case 'Every 2 Weeks':
          cost = 17.5 * 2;
          break;
        default:
          cost = 22;
      }
      break;
    case '1000g':
      switch (frequency) {
        case 'Every Week':
          cost = 22 * 4;
          break;
        case 'Every 2 Weeks':
          cost = 32 * 2;
          break;
        default:
          cost = 42;
      }
  }

  document.getElementById('modal-cost').innerHTML =
    '$' + cost.toFixed(2) + '/mo';
  document.getElementById('mobile-modal-cost').innerHTML =
    'Checkout - $' + cost.toFixed(2) + '/mo';
  modal.style.display = 'block';
};

checkoutBtn.onclick = () => {
  modal.style.display = 'none';
};

mobileCheckoutBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

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

  let prefText = document.getElementById('pref').innerHTML;
  let typeText = document.getElementById('type').innerHTML;
  let quantText = document.getElementById('quant').innerHTML;
  let grindText = document.getElementById('grind').innerHTML;
  let freqText = document.getElementById('freq').innerHTML;

  let answers = prefText + typeText + quantText + grindText + freqText;

  if (!answers.includes('_')) {
    document.getElementById('create-plan-btn').disabled = false;
    document.getElementById('create-plan-btn').style = 'cursor: pointer;';
    document.getElementById('create-plan-btn').classList.remove('disabled');
  } else {
    document.getElementById('create-plan-btn').disabled = true;
    document.getElementById('create-plan-btn').style = 'cursor: not-allowed;';
    document.getElementById('create-plan-btn').classList.add('disabled');
  }
};
