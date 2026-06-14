import { Card } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sendData, updateCard } from '../../../redux/slices/AddToCart'
import { useAppContext } from '../../ContextApi'
const HotProducts = ({ data, title }) => {
    const {appState,updateState}=useAppContext()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const carddata = useSelector((state) => state)
    const handleDetails = (item,e) => {
        navigate(`/details/${item.id}`)
        console.log('onSelect', item);
    };
    const AddCart = (item) => {
        const existingItemIndex = carddata?.addToCart?.data.findIndex((cartItem) => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            const updatedCartData = carddata.addToCart.data.map((cartItem, index) =>
                index === existingItemIndex ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
            );
            dispatch(updateCard(updatedCartData));
        } else {
            const updatedItem = { ...item, qty: 1 };
            dispatch(updateCard([...carddata?.addToCart?.data, updatedItem]));
        }
    };
    console.log("asedasdsad",carddata?.addToCart?.data)
    return (
        <div>
            <div className="font-extrabold text-base text-[red]">
                {title}
            </div>
            <div className="grid grid-cols-12 grid-flow-row gap-4">
                {
                    data?.map((item, index) => (
                        <div key={item.id} className="md:col-span-3"  >
                            <div>
                                <Card
                                    cover={<img src={item.image} alt={item.name} className="h-[150px] object-contain"  />}
                                >
                                    <div onClick={() => handleDetails(item)} className="h-40">
                                        <div className="h-30">
                                            <div className="font-bold">
                                                {item.title}
                                            </div>
                                            <div className="text-sky-400 text-2xl font-bold">
                                                ${item.price}
                                            </div>
                                        </div>
                                        <div className="description">
                                            {item.description}
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-slate-950 text-slate-50 w-full" onClick={() => AddCart(item)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default HotProducts