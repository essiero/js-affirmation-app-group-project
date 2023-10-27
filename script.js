onReady();

let fireCounter = 0;
let iceCounter = 0;

function handleSubmit(event){
  event.preventDefault();
  if(fireCounter>iceCounter || fireCounter === 0 && iceCounter === 0){
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
  } else {
    document.getElementById('aff-text').value = '';
    document.getElementById('aff-author').value = '';
    return false
  }
}

function deleteAff(event){
  if (iceCounter > fireCounter){
  event.target.parentElement.parentElement.remove();
  }
}

function onFireClick() {
  console.log(`We're in the fireClick function!`)
  let fireClick = document.getElementById("emojiBin");
  console.log(fireClick);
  emojiBin.innerHTML += `<h2>🔥</h2>`
  fireCounter ++
  console.log(fireCounter);
}

function onIceClick() {
  emojiBin.innerHTML += `<h2>❄️</h2>`
  iceCounter ++;
  console.log (iceCounter);
}

function onReady() {
  console.log('Javascript is working!');
}
