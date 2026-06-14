import { Card } from 'antd';
import React from 'react'
import Slider from 'react-slick';
import { useAppContext } from '../../ContextApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard } from '../../../redux/slices/AddToCart';


const LatestProduct = ({ data,title }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
  return (
    <div className="slider-container">
            <div className="font-extrabold text-base text-[red]">
                {title}
            </div>
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id} className='md:col-span-2'>
            <Card>
              <div className='grid'>
                <div className='flex justify-start gap-2'>
                  <div>
                    {item.image && <img alt="example" src={item.image} className='h-[100px] w-[100px]' />}
                  </div>
                  <div className='text-sm text-[red] font-bold'  onClick={() => handleDetails(item)}>
                    {item.price}
                  </div>
                </div>
              </div >
              <div className="description"  onClick={() => handleDetails(item)}>
                {item.description}
              </div>
              <div>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default LatestProduct;