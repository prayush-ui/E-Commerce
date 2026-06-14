import React from 'react';
import { Button, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useAppContext } from '../ContextApi';
import RelatedProduct from './RelatedProduct';
import { useDispatch, useSelector } from 'react-redux'
import { updateCard } from '../../redux/slices/AddToCart';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchSearchProducts, fetchcarouselData } from '../../services/AllProduct';
import RecentProducts from './dashboard/RecentProducts';
// import { updateCard } from '../../redux/slices/AddToCart';
const Details = () => {
    const navigate = useNavigate()
    const { appState } = useAppContext();
    const carddata = useSelector((state) => state)
    const params = useParams()
    const location = useLocation()
   
    const dispatch = useDispatch()
    const { data, loading } = useSelector((state) => state.searchdynamicproduct);
    React.useEffect(() => {
        dispatch(fetchSearchProducts(`${params.id}`))
    }, [params?.id])
 console.log("orders", params.id)
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
    const handleclick = (item) => {
        navigate(`/ordersingle/${item.id}`)
    };
    const { data: carouseldata, loading: carouselloading } = useSelector((state) => state?.carouseldata)
  React.useEffect(() => {
    dispatch(fetchcarouselData());
  }, [dispatch])
    console.log("selectedItem",carddata?.addToCart?.data)
    let Discount=20
    const DiscountAmt = data?.data?.price * (Discount / 100)
    const DiscountedAmt = data?.data?.price - DiscountAmt
    return (
        <div className="grid md:grid-cols-12 grid-flow-row">
            <div className="md:col-span-6 md:ml-[10rem]">
                <div className="sm:w-1/2 mdIw-[500px] max-h-32 h-40 bg-black ">
                       <div>
                            <img src={data?.data?.image} className="h-34 w-full " alt='gg' />
                        </div>
                </div>
            </div>
            <div className="md:col-span-6 grid gap-2">
                <div>
                    {data?.data?.title}
                </div>
                <div className="flex">
                    Price:
                    <div className="text-decoration-line: line-through">
                        {data?.data?.price}
                    </div>
                    <div >
                        {DiscountedAmt}
                    </div>
                </div>
                <div>
                    {data?.data?.category}
                </div>
                <div>
                    {data?.data?.description}
                </div>
                <div>
                    <Rate allowHalf value={data?.data?.rating?.rate} className="text-[red]" />
                </div>
                <div>
                    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} value={data?.data?.comment} />
                </div>
                <div>
                    <Button className='bg-slate-800 text-[#FFFFFF] w-full' onClick={()=>handleclick(data?.data)}>
                        Buy Now
                    </Button>
                    <div>
                        <button className="bg-slate-800 text-[#FFFFFF] w-full" onClick={() => AddCart(data?.data)}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:col-span-12 md:ml-[10rem]">
                <RecentProducts title={"sarad"} data={carouseldata?.data} />
            </div>
        </div>
    );
};
export default Details;