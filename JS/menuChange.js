const ADDSALE_STATUS = 1;
const PRODUCTLIST_STATUS = 2;

const setMenuStatus = (menuNo) => {
    console.log('setMenuStatus() called!');

    switch(menuNo) {

        case ADDSALE_STATUS:
            document.querySelector('div.menu_wrap a.print_list').style.display = 'inline-block';
            break;

        case PRODUCTLIST_STATUS:
            document.querySelector('div.menu_wrap a.add_list').style.display = 'none';
            break;
    }

}