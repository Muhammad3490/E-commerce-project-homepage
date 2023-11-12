let shop = document.querySelector('#shop');
let shopListVisibility = true;

shop.addEventListener('click', () => {
    let hiddenList = document.querySelector('.Hidden-list');
    if (hiddenList) {
        if (shopListVisibility) {
            hiddenList.style.display = 'none';
        } else {
            hiddenList.style.display = 'grid';
        }
        shopListVisibility = !shopListVisibility;
    }
});
