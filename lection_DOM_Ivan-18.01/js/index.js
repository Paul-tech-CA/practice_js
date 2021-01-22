const filterNodes = (selector, callback) => {

    let content = document.querySelector(selector);

    [...content.childNodes].filter(callback).forEach((node, index) => {
        if (!index) content.innerHTML = '';
        content.append(node);
    });
};

const createrElement = (conteinerSelector, tag, data = {}, node = '') => {
    let conteiner;
    if (conteinerSelector)
        conteiner = document.querySelector(conteinerSelector);

    let nodeElement = document.createElement(tag);
    
    for (let key in data)
        nodeElement.setAttribute(key, data[key]);

    if (typeof node !== 'string') nodeElement.innerHTML = node.outerHTML;
    else nodeElement.textContent = node;
    
    if (conteiner) conteiner.append(nodeElement);

    return nodeElement;
};

// создание внуртенних узлов
let node1 = createrElement(false, 'span', {test:3}, 'hello word!!!');
let node = createrElement(false, 'span', {test:2}, node1);

let data = {test:1};
let selector = '.container .text-center';
let tag = 'p';

// создание и рендер внешних узлов
createrElement(selector, tag, data, document.querySelector('h1'));
createrElement(selector, tag, data, 'test');


//filterNodes('#center-content', node => node.tagName === 'DIV' );
//filterNodes('.container .text-center', node => (node.tagName + '').toLowerCase() === 'div');
// filterNodes('.container .text-center', node => node.tagName !== 'H1');

