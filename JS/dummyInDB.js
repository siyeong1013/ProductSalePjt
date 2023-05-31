// dummyInit : map사용해서 dummy저장
const dummyInit = () => {
  customerDumy.map((e) => {
    customerDB.set(e.c_id, e);
  });
  productDumy.map((e) => {
    productDB.set(e.p_no, e);
  });
  manufactureDumy.map((e) => {
    manufactureDB.set(e.m_no, e);
  });
};