/*
상품 판매 등록 화면

상품 등록.js - input {고객아이디 / 상품번호 / 판매 금액} [파일]
버튼.js - 상품판매 등록(saleBtn) / 초기화(resetBtn) [파일]

상품 판매 등록 버튼을 눌리면 
saleDB에 (고객 아이디, 상품번호, 판매금액) 데이터 넣기

초기화 버튼을 눌리면
현재 input 값 공백으로 바꾸기.

*/
let saleNum = 1;
const saleRegistration = (customerId, productNum, salePrice) => {
    /*
    고객 아이디, 상품번호, 판매금액을 매개변수로 입력받고
    전역변수 saleNum을 키값으로 saleDB에
    매개변수를 넣기
    */
    console.log('saleRegistration() CALLED!!')
    console.log('saleNum 1: ', saleNum)

    // html로 만들어야함.

    saleDB.set(saleNum, {
        c_id: customerId,
        p_num: productNum,
        s_price: salePrice,
    })
    saleNum++;
    console.log('saleNum 2: ', saleNum)
    console.log('saleDB: ', saleDB)

}