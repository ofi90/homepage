console.log('siema');

const name= "Bartosz Oficjalski";
const age= 29;

console.log(name);
console.log(age);

console.log(`Nazywam sie ${name} i mam ${age}`)

const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = '<strong>Pozdro</strong> JS';

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[0]);