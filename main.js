const catalog = [
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
{
    img:'./img/card2.jpg',
    name:'Фотозоны',
    price: 1200,
    oldPrice: 1400,

},
]







const wrapper = document.querySelector ('.wrapper')

const cards = catalog.map(card => 
{
    return`
    <div class="wrapper__flow-card">
            <img src=${card.img} alt="" />
            <h4 class="wrapper__flow-title">${card.name}</h4>
            <div class="wrapper__about">
            <h4 class="wrapper__flow-title">${card.price}</h4> 
             <s>${card.oldPrice}</s>
             </div>
            <button class="wrapper__flow-btn">Заказать</button>
     </div>
    `
},
).join('')
wrapper.innerHTML = cards