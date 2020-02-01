console.log('siema');

const name= "Bartosz Oficjalski";
const age= 75;

console.log(name);
console.log(age);

console.log(`Nazywam sie ${name} i mam ${age}`)

const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = '<strong>Pozdro</strong> JS';

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[0]);

function calculate(x) {
    x = x + 3;
    console.log(x);
    return x+7
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);

const button = document.querySelector('.header__button--js');
console.log(button);

function handleClick(){
    console.log('halo')
}
button.addEventListener('click', handleClick);