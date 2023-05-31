const saleListEventHandler = () => {
    let saleList = document.querySelector('.sign_in');

    saleList.addEventListener('click', () => {
        if (saleDB.get(1)) {
            const retArr = printSaleList();
            retArr.forEach((sale, idx) => {
                const tbody = document.querySelector('.tbody');
                tbody.insertAdjacentHTML(
                    'beforeend',
                    `<tr>
                    <td>${sale.customer[idx].c_id}</td>
                    <td>${sale.customer[idx].c_name}</td>
                    <td>${sale.customer[idx].c_mail}<td>
                    </td>
                    <td>
                    ${sale.customer[idx].c_phone}
                    </td>
                    <td>
                    ${sale.product[idx].p_no}
                    </td>
                    <td>
                    ${sale.product[idx].p_name}
                    </td>
                    <td>${sale.product[idx].p_price}</td>
                    <td>
                    ${sale.product[idx].p_quantity}
                    </td>
                    <td>${sale.manufature[idx].m_no}</td>
                    <td>
                    ${sale.manufature[idx].m_name}
                    </td>
                    <td>
                    ${sale.manufature[idx].m_address}
                    </td>
                    <td>
                    ${sale.manufature[idx].m_phone}
                    </td>
                    <td>
                    ${sale.manufature[idx].m_mananger}
                    </td>
                    <td>
                    ${sale.value[idx].s_no}
                    </td>
                    <td> ${sale.value[idx].s_price}</td>
                    <td> ${sale.value[idx].c_id}</td>
                <tr>`
                );
            });
        }
    });
};
