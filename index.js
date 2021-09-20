hljs.initHighlightingOnLoad();

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.burger-button');

menuButton.addEventListener('click', () => {
    if (menuButton.classList.contains('burger-button--open')) {
        menuButton.classList.remove('burger-button--open');
        menu.classList.remove('menu--open');
    } else {
        menuButton.classList.add('burger-button--open');
        menu.classList.add('menu--open');
    }
})

console.log('вёрстка валидная +10');
console.log('вёрстка семантическая +20');
console.log('для оформления СV используются css-стили +10');
console.log('контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10');
console.log('вёрстка адаптивная +10');
console.log('есть адаптивное бургер-меню +10');
console.log('на странице СV присутствует изображение +10');
console.log('контакты для связи и перечень навыков оформлены в виде списка ul > li +10');
console.log('CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10');
console.log('CV содержит пример вашего кода с подсветкой кода +10');
console.log('CV содержит изображения-ссылки на выполненные вами проекты +10');
console.log('CV выполнено на английском языке +10');
console.log('выполнены требования к Pull Request +10');
console.log('дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10');
console.log('Итого:150')