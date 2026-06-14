import React from 'react';
import { Button, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useAppContext } from '../ContextApi';
import RelatedProduct from './RelatedProduct';
import { useDispatch, useSelector } from 'react-redux'
import { updateCard } from '../../redux/slices/AddToCart';
import { useNavigate } from 'react-router-dom';
// import { updateCard } from '../../redux/slices/AddToCart';
const Details = () => {
    const navigate = useNavigate()
    const { appState } = useAppContext();
    const carddata = useSelector((state) => state)
    console.log(carddata);
    const dispatch = useDispatch();
    const AddCart = (item) => {
        const newItem = { ...item, qty: 1 };
    };
    const handleclick=(item)=>{
        navigate('/ordernow')
    }
    const data= useSelector((state) => state?.addToCart?.data?. [0])
    const image = data?.image || '';
    console.log("selectedItem",data)
    let Discount=20
    const DiscountAmt = data?.price * (Discount / 100)
    const DiscountedAmt = data?.price - DiscountAmt
    console.log("asfdsadasd",appState)
    return (
        <div className="grid md:grid-cols-12 grid-flow-row">
            <div className="md:col-span-6 md:ml-[10rem]">
                <div className="sm:w-1/2 mdIw-[500px] max-h-32 h-40 bg-black ">
                       <div>
                       <img src={appState?.data?.image} className="h-34 w-full " alt='gg' />
                        </div>
                </div>
            </div>
            <div className="md:col-span-6 grid gap-2">
                <div>
                    {appState?.data?.title}
                </div>
                <div className="flex">
                    Price:
                    <div className="text-decoration-line: line-through">
                        {appState?.data?.price}
                    </div>
                    <div >
                        {DiscountedAmt}
                    </div>
                </div>
                <div>
                    {appState?.data?.category}
                </div>
                <div>
                    {appState?.data?.description}
                </div>
                <div>
                    <Rate allowHalf value={appState?.data?.rating?.rate} className="text-[red]" />
                </div>
                <div>
                    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} value={appState?.data?.comment} />
                </div>
                <div>
                    <Button className='bg-slate-800 text-[#FFFFFF] w-full' onClick={handleclick}>
                        Buy Now
                    </Button>
                    <div>
                        <button className="bg-slate-800 text-[#FFFFFF] w-full" onClick={() => AddCart(data)}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:col-span-12 md:ml-[10rem]">
                <RelatedProduct title={"sarad"} data={appState?.data?.RelatedProducts} />
            </div>
        </div>
    );
};
export default Details;