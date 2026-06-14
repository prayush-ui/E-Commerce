import { Avatar, Card, Skeleton } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateCard } from '../../../redux/slices/AddToCart'
import { useAppContext } from '../../ContextApi'

const RecentProducts = ({ data, title }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {carddata,loading} = useSelector((state) => state)
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
    return (
       <Skeleton loading={loading}>
 <div>
            <div className="font-extrabold text-base text-[red]">
                {title}
            </div>
            <div className="grid grid-cols-12 grid-flow-row gap-4">
                {
                    data?.map((item) => (
                        <div key={item.id} className="md:col-span-3">
                            <div>
                                <Card>
                                    <div className="grid gap-2">
                                    <div className="flex justify-center">
                                        <Avatar src={item.image} size={100}/>
                                        </div>
                                        <div className="text-center" onClick={() => handleDetails(item)}>
                                        {item.name}
                                        </div>
                                        <div className="description1" onClick={() => handleDetails(item)}>
                                        {item.description}
                                        </div>
                                        <div>
                                        <button className="bg-slate-950 text-slate-50 w-full" onClick={() => AddCart(item)}>
                                            Add to cart
                                        </button>
                                    </div>
                                    </div>

                                </Card>
                            </div>     
                        </div>
                    ))
                }
            </div>
        </div>
       </Skeleton>
    )
}

export default RecentProducts