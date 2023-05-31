const saleListEventHandler = () => {
    let saleList = document.querySelector('.sign_in');

    saleList.addEventListener('click', () => {
        if (saleDB.get(1)) {
            printSaleList();
        }
    });
};
