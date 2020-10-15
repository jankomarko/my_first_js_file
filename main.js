window.addEventListener('load', main);

function main(){

  let holder = document.getElementById('holder');
  holder.style.border = '2px solid #000';
  holder.style.minHeight = '250px';

  let title= document.createElement('h1');
  title.style.color = '#001188';
  title.style.borderBottom = '2px solid #001188';
  title.innerText = 'Primer upravljanja tekstom';
  holder.appendChild(title);

  let paragraph = document.createElement('p');
  paragraph.style.textAlign = 'center';
  paragraph.innerHTML = "Ovo je <u>prvi</u> paragraf";
  holder.appendChild(paragraph);

  let paragraph1 = document.createElement('p');
  paragraph1.style.textAlign = 'center';
  paragraph1.innerHTML = "Ovo je <u>drugi</u> paragraf";
  holder.appendChild(paragraph1);

  let paragraph2 = document.createElement('p');
  paragraph2.style.textAlign = 'center';
  paragraph2.innerHTML = "Ovo je <u>treci</u> paragraf";
  holder.appendChild(paragraph2);

  let button = document.createElement('button');
  button.innerHTML = 'izvrsi funkciju';
  button.addEventListener('click', buttonClick);
  holder.appendChild(button);

  let remove = document.createElement('button');
  remove.innerHTML = 'Obrisi';
  remove.addEventListener('click', removeClick);
  holder.appendChild(remove);

}
function buttonClick(){
/*  let holder = document.getElementById('holder');
  let paragraphs = holder.querySelectorAll('p');
  let secondParagraph = paragraphs[1];
  secondParagraph.style.color = 'red';*/
  document.querySelectorAll('#holder > p')[1].style.color = 'red';

}
function removeClick(){
  let holder = document.getElementById('holder');
    let paragraphs = holder.querySelectorAll('p');
    for(let paragraph of paragraphs){
      holder.removeChild(paragraph);
    }
}
