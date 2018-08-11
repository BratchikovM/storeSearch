'use strict';

searchButton.addEventListener('click', click);
function click() {
    console.log('ok');
    let nameProduct = document.getElementById('nameProduct');
    chrome.tabs.create({url: 'https://www.smallwoodhome.com/search?q=' + nameProduct.value});
}