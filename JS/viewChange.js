const ADDSALE_VIEW = 1;
const PRODUCTLIST_VIEW = 2;
let addSaleWrap = '';
let productListWrap = '';

const initViews = () => {
    console.log('initViews() called!');

    addSaleWrap = document.querySelector('div.addSale_wrap');
    productListWrap = document.querySelector('saleProductList_wrap');

}

const showSelectedView = (viewNo) => {
    console.log('showSelectedView() called!');

    switch(viewNo) {
        case ADDSALE_VIEW:
            addSaleWrap.style.display = 'block';
            productListWrap.style.display='none';
            break;

        case PRODUCTLIST_VIEW:
            addSaleWrap.style.display = 'block';
            productListWrap.style.display='none';
            break;
    }

}