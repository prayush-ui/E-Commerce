import React from 'react';
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { paymentMethd } from '../utils';
import { Esewa } from './Esewa';
import { Khalti, khalti } from './Khalti';
import KhaltiCheckout from 'khalti-checkout-web';
import { useParams } from 'react-router-dom';
import { fetchSearchProducts } from '../../services/AllProduct';

const Ordersingle = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.searchdynamicproduct);

    React.useEffect(() => {
        dispatch(fetchSearchProducts(`${params.id}`));
    }, [params?.id]);

    console.log("orders654655", data?.data);
    const dataSource = [
        { ...data?.data, qty: 1 } // Initialize qty as 1
    ]
      
    const columns = [
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'qty',
        },
    ];

    const [isPayment, setPayment] = React.useState({
        esewa: false,
        khalti: false,
    });
    const price=data?.data?.price*100
    const handlePayment = (id) => {
        if (id === 1) {
            setPayment({
                esewa: true,
                khalti: false,
            });
        } else if (id === 2) {
            checkout.show({ amount: price });
        }
    }
    const checkout = new KhaltiCheckout(khalti);
    const path = "https://uat.esewa.com.np/epay/main";
    const parms = {
        amt: data?.data?.price,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: data?.data?.price,
        pid: "ee2c3cal-696b-4cc5-a6be-2c40d929d453345344345544",
        scd: "EPAYTEST",
        su: "http://merchant.com.np/page/esewa_payment_success",
        fu: "http://merchant.com.np/page/esewa_payment_failed",
    };

    return (
        <div>
            <div>
                <Table dataSource={dataSource}  columns={columns} />
            </div>
            <div>
                Total Sum {data?.data?.price}
            </div>
            <div className="md:col-span-7 flex justify-start gap-2">
                {paymentMethd?.map((item) => (
                    <div key={item.id}>
                        <div onClick={() => handlePayment(item.id)}>
                            <img src={item.image} alt={item.name} className="h-[100px] w-[100px] object-contain" />
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
            {isPayment?.esewa && <Esewa path={path} parms={parms} />}
        </div>
    );
};

export default Ordersingle;
