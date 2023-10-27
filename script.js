onReady();

function handleSubmit(event){
  event.preventDefault();
  console.log(`It worked!`);
  let affirmation = document.getElementById('aff-text').value;
  document.getElementById('aff-text').value = ''
  let author = document.getElementById('aff-author').value;
  document.getElementById('aff-author').value = '';
  tableBody.innerHTML +=
  `<tr>
  <td>${affirmation}</td>
  <td>${author}</td>
  <td><button onclick="deleteAff(event)">🆒</button></td>
</tr>`
}

function deleteAff(event){
  event.target.parentElement.parentElement.remove();
}

function onFireClick() {
  console.log(`We're in the fireClick function!`)
  let fireClick = document.getElementById("emojiBin");
  console.log(fireClick);
  emojiBin.innerHTML += `<h2>🔥</h2>`
}

function onIceClick() {
  emojiBin.innerHTML += `<h2>❄️</h2>`
}

function onReady() {
  console.log('Javascript is working!');
}
