'use strict';

let quantity = document.getElementsByClassName("Grid__Cell").length;

if (quantity == 1) {
    let hrefProduct = document.getElementsByClassName("ProductItem__Title")[0].children[0].href;
    window.open(hrefProduct);
} else {
    console.log(quantity);
    var div = document.createElement('div');
    div.style.zIndex = '999';
    div.style.width = '100%';
    div.style.minHeight = '100%';
    div.style.overflow = 'hidden';
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.id = 'closeDiv';

    div.innerHTML = "<div style='background-color: white; border: 1px solid black; width: 300px; height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center'><p><strong>Найдено больше одного товара.</p><p>Выберите сами.</strong></p><input type=\"button\" value=\"OK\"></div>";
    document.body.appendChild(div);
}
closeDiv.addEventListener('click', click);
function click() {
    document.getElementById('closeDiv').style.display = 'none';
}