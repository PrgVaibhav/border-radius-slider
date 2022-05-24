const output = document.querySelector('.output');
const result = document.querySelector('.result');
const input = document.querySelector('.input');

input.addEventListener('input', function () {
  result.innerText = input.value + '%';
  output.style.borderRadius = input.value + '%';
});
