//parallex effect
let model = document.getElementById('model');
let screen = document.getElementById('screen');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    model.style.marginLeft = value * 0.7 + 'px';
    screen.style.left = value * -2 + 'px';
})
//***************************************************************************//
//Other input box function
document.addEventListener('DOMContentLoaded', function() {
    const optionsDropdown = document.getElementById('options');
    const inputBox = document.querySelector('.input-box');
  
    optionsDropdown.addEventListener('change', function() {
      if (optionsDropdown.value === 'others') {
        inputBox.style.display = 'block';
      } else {
        inputBox.style.display = 'none';
      }
    });
});
//***************************************************************************//

//hacker effect
const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById('whatfix').onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letters, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }

            return letter[Math.floor(Math.random() * 26)]
        })
        .join("");

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 4;
    }, 30);
}


const form = document.getElementById('ROIFORM');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = (form.querySelector('input#name')).value;
    const email = (form.querySelector('input#email')).value;
    const designation = (form.querySelector('input#designation')).value;

    //Getting user value
    const userValue = (form.querySelector('input#numericalInput')).value;
    //END

    //Getting the region Value
    const regionValue = (form.querySelector('select#q3')).value;
    //END
    

    //Getting the impact areas value
    const selectedOptions = form.querySelectorAll('input:checked');
    let checkedValue = 0;
    selectedOptions.forEach(checkbox => {
        if(parseInt(checkbox.value) == 6) {
            checkedValue += (6.6 * regionValue * userValue);
        } else if(parseInt(checkbox.value) == 0) {
            checkedValue += (0.8 * regionValue * userValue);
        } else if(parseInt(checkbox.value) == 3) {
            checkedValue += (3.25 * regionValue * userValue);
        } else if(parseInt(checkbox.value) == 525) {
            checkedValue += (525 * regionValue);
        } else if(parseInt(checkbox.value) == 2508) {
            checkedValue += (2508.8 * regionValue);
        } else {
            checkedValue += 14598.08;
        }
    });
    //END

    let totalValue = 0;
    totalValue += checkedValue * 0.75 * 1.5
    const roundedValue = Math.round(totalValue / 100) * 100;
    const formattedValue = roundedValue.toLocaleString();

    localStorage.setItem('global', formattedValue);

    window.location.assign('answer.html')
});