const printSaleList = () => {
    let retArr = [];
    let customer;
    let product;
    let manufature;
    let sale;
    let i = 1;
    for (const value of saleDB.values()) {
        customer = customerDB.get(value.c_id);
        product = productDB.get(value.p_no);
        manufature = manufactureDB.get(product.m_no);
        sale = saleDB.get(i++);
        retArr.push({ customer, product, manufature, sale });
    }

    return retArr;
};

// const customerDB = new Map();
// const productDB = new Map();
// const manufactureDB = new Map();
// const saleDB = new Map();
