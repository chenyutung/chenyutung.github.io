
const btn = document.getElementById('btn');

btn.addEventListener('click', function Click(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'white';

  // 👇️ optionally change text color
  document.body.style.color = 'black';
});