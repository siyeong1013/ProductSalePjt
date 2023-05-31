const printSaleList = () => {
    let retArr = [];
    let customer;
    let product;
    let manufature;

    for (const value of saleDB.values()) {
        customer = customerDB.get(value.c_id);
        product = productDB.get(value.p_no);
        manufature = manufactureDB.get(product.m_no);
        retArr.push({ customer, product, manufature, value });
    }

    return retArr;
};

// const customerDB = new Map();
// const productDB = new Map();
// const manufactureDB = new Map();
// const saleDB = new Map();
