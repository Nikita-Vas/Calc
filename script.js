let a = ''; //first number
let b = ''; //second number
let sign = ''; // operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

//screen
const screen = document.querySelector('.calc-screen p');

function clearAll() {
  screen.innerHTML = 0;
  a = '';
  b = '';
  sign = '';
  finish = false;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelectorAll('.btn').forEach((item) => {
  item.addEventListener('click', function (e) {
    const key = e.target.textContent;
    // check if click on numbers or '.'
    if (digit.includes(key)) {
      console.log(key);
      if (a === '' || sign === '') {
        if (key === '.' && a.includes('.')) {
          a += '';
        } else if (key === '.' && a === '') {
          a += '';
        } else {
          a += key;
          screen.innerHTML = a;
        }
      } else if (a !== '' && sign !== '') {
        if (key === '.' && b.includes('.')) {
          b += '';
        } else if (key === '.' && b === '') {
          b += '';
        } else {
          b += key;
          screen.innerHTML += key;
        }
      } else if (a !== '' && b !== '' && finish) {
      }
    }
    // check if click on operator
    if (action.includes(key)) {
      if (a === '' && key === '-') {
        a += key;
        screen.innerHTML = a;
      } else {
        sign = key;
        screen.innerHTML = `${a}${sign}`;
      }
    }

    // click on '='
    if (key === '=' && b !== '') {
      switch (sign) {
        case '+':
          a = +a + +b;

          if (+a % 1 == 0) {
            screen.innerHTML += `=${a}`;
          } else {
            screen.innerHTML += `=${a.toFixed(2)}`;
          }

          b = '';

          break;

        case '-':
          a = +a - +b;

          if (+a % 1 == 0) {
            screen.innerHTML += `=${a}`;
          } else {
            screen.innerHTML += `=${a.toFixed(2)}`;
          }
          b = '';
          break;

        case 'X':
          a = +a * +b;

          if (+a % 1 == 0) {
            screen.innerHTML += `=${a}`;
          } else {
            screen.innerHTML += `=${a.toFixed(2)}`;
          }
          b = '';
          break;

        case '/':
          a = +a / +b;

          if (+a % 1 == 0) {
            screen.innerHTML += `=${a}`;
          } else {
            screen.innerHTML += `=${a.toFixed(2)}`;
          }
          b = '';
          break;
      }
    }

    console.log(a, sign, b);
  });
});
