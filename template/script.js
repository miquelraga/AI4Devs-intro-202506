
function invertString() {
  const input = document.getElementById('inputText').value;
  const reversed = input.split('').reverse().join('');
  document.getElementById('result').textContent = reversed;
}
