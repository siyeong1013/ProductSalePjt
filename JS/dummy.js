const customerDumy = [
  {
    c_id: "gildong",
    c_name: "홍길동",
    c_mail: "gildong@naver.com",
    c_phone: "010-1234-5678",
  },
  {
    c_id: "gildong",
    c_name: "홍길동",
    c_mail: "chanho@naver.com",
    c_phone: "010-1234-5678",
  },
  {
    c_id: "gildong",
    c_name: "홍길동",
    c_mail: "chanho@naver.com",
    c_phone: "010-1234-5678",
  },
  {
    c_id: "gildong",
    c_name: "홍길동",
    c_mail: "chanho@naver.com",
    c_phone: "010-1234-5678",
  },
  {
    c_id: "gildong",
    c_name: "홍길동",
    c_mail: "chanho@naver.com",
    c_phone: "010-1234-5678",
  },
];
const productDumy = [
  { p_no: 1, m_no: 1, p_name: "A상품", p_price: 10000, p_quantity: 50 },
  { p_no: 1, m_no: 1, p_name: "A상품", p_price: 10000, p_quantity: 50 },
  { p_no: 1, m_no: 1, p_name: "A상품", p_price: 10000, p_quantity: 50 },
  { p_no: 1, m_no: 1, p_name: "A상품", p_price: 10000, p_quantity: 50 },
  { p_no: 1, m_no: 1, p_name: "A상품", p_price: 10000, p_quantity: 50 },
];
const manufactureDumy = [
  {
    m_no: 1,
    m_name: "A제조사",
    m_address: "AAA시 aaa구 123-456",
    m_phone: "010-1478-5236",
    m_manager: "A대리",
  },
  {
    m_no: 1,
    m_name: "A제조사",
    m_address: "AAA시 aaa구 123-456",
    m_phone: "010-1478-5236",
    m_manager: "A대리",
  },
  {
    m_no: 1,
    m_name: "A제조사",
    m_address: "AAA시 aaa구 123-456",
    m_phone: "010-1478-5236",
    m_manager: "A대리",
  },
  {
    m_no: 1,
    m_name: "A제조사",
    m_address: "AAA시 aaa구 123-456",
    m_phone: "010-1478-5236",
    m_manager: "A대리",
  },
  {
    m_no: 1,
    m_name: "A제조사",
    m_address: "AAA시 aaa구 123-456",
    m_phone: "010-1478-5236",
    m_manager: "A대리",
  },
];

// 더미데이터 DB에 in
const arrInDB = () => {
  console.log("arrInDB() CALLED!!");

  let newArr = [];

  for (i = 0; i < Object.keys(list).length; i++) {
    let key = Object.keys(list)[i];
    let value = Object.values(list)[i];
    newArr.push({ count: value, id: Number(key), quote: "" });
  }

  console.log(newArr);
  return newArr;
};
