import React from 'react'
import { DeleteFilled, MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'
import {  useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { updateCard } from '../../redux/slices/AddToCart'
const Order = () => {
    const navigate = useNavigate()
    const dispatch=useDispatch();
    const carddata=useSelector((state)=>state)
    console.log("carddata",carddata)
    const [orderdata, setOrderData] = React.useState([])
    const handleAdd = (id) => {
        const addtoqty = orderdata.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    qty: item.qty + 1,
                };
            } else {
                return item;
            }
        });
        dispatch(updateCard(addtoqty))
    };
    const handleMin = (id,qty) => {
        const minqty = orderdata.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    qty: Math.max(1, item.qty -1),
                };
            } else {
                return item;
            }
        });
        dispatch(updateCard(minqty))
    };
    const handleDelete=(id)=>{
        dispatch(updateCard(carddata?.addToCart?.data?.filter((item)=>item.id!==id)))
    }
    const totalPrice = carddata?.addToCart?.data?.reduce((total, item) => {
        return total + item.price * item.qty;
    }, 0);
    React.useEffect(()=>{
            setOrderData(carddata?.addToCart?.data)
},[carddata?.addToCart?.data])
const handleclick=()=>{
    navigate('/ordernow')
}
  return (
    <div>
        <div>
        {
            carddata?.addToCart?.data.map((item)=>(
                <div key={item.id} className="flex justify-start gap-3 items-center">
                    <div>
                        <img src={item.image} className="w-[100px] h-auto" alt='asd'/>
                        </div>
                        <div>
                            <div>{item.title}</div>
                            <div>{item.price * item.qty}</div>
                            <div>{item.qty}</div>
                            </div>
                            <div>
                                <div> 
                                    <PlusCircleFilled onClick={()=>handleAdd(item.id)}/>
                                    </div>
                                    <div>
                                        <MinusCircleFilled onClick={()=>handleMin(item.id)}/>
                                        </div>
                                    <div>
                                    <DeleteFilled onClick={()=>handleDelete(item.id)}/>
                                    </div>
                            </div>
                    </div>
            ))
        }
    </div>
    <div>
        Total Sum: {totalPrice}
    </div>
    <div> 
        <Button onClick={handleclick}>
            Order now
        </Button>
    </div>
    </div>
  )
}
export default Order