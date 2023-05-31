/*
상품 판매 등록 화면

상품 등록.js - input {고객아이디 / 상품번호 / 판매 금액} [파일]
버튼.js - 상품판매 등록(saleBtn) / 초기화(resetBtn) [파일]

상품 판매 등록 버튼을 눌리면 
saleDB에 (고객 아이디, 상품번호, 판매금액) 데이터 넣기

초기화 버튼을 눌리면
현재 input 값 공백으로 바꾸기.

*/
const saleBtn = () => {
    
    let saleBtn = document.querySelector('addSale_wrap input:nth-child(4)');
    saleBtn.addEventListener('click', function () {
    console.log('saleBtn CLICKED!!')
        /*
        판매 상품 등록 버튼을 누르면
        front단 입력값을 변수에 저장하고 판매등록 함수를 통해 
        saleDB에 정보 저장 후 front단 인풋값 공백으로 바꿈
        */
        let customerId = document.querySelector('addSale_wrap input[name="c_id"]').value;
        let productNum = document.querySelector('addSale_wrap input[name="p_no"]').value;
        let salePrice = document.querySelector('addSale_wrap input[name="s_price"]').value;

        saleRegistration(customerId, productNum, salePrice);

        alert('product registration SUCCESS!!');

        document.querySelector('addSale_wrap input[name="c_id"]').value = '';
        document.querySelector('addSale_wrap input[name="p_no"]').value = '';
        document.querySelector('addSale_wrap input[name="s_price"]').value = '';

    })
}

