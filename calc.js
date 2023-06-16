const button = document.getElementsByClassName('button');
const inputField = document.getElementById('number-input');

for (let i = 0; i < button.length; i++) {
 button[i].addEventListener('click', (event) => {

  let inputText = '';
  switch (event.target.innerHTML) {
    case 'C':
         break;
    case '=':
       inputText = eval(inputField.value);
         break;
    case '←':
       inputText = inputField.value.slice(0,inputField.value.length-1);
         break;
    default:
        inputText =  `${inputField.value}${event.target.innerHTML}`;
  }


    inputField.value = inputText;
 }) }