import React from 'react'
import HotProducts from './HotProducts'
import PremiumProducts from './PremiumProducts'
import RecentProducts from './RecentProducts'
import LatestProduct from './LatestProduct'
import Carousel from './Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, fetchallProducts, fetchcarouselData } from '../../../services/AllProduct'
import { Spin } from 'antd'
const Dashboard = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allproduct);
  const { data: carouseldata, loading: carouselloading } = useSelector((state) => state?.carouseldata)
  const { data:recipedata } = useSelector((state) => state.allproducts);
  React.useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchcarouselData());
    dispatch(fetchallProducts());
  }, [dispatch])
  console.log("datadash",recipedata )
  return (
    <div>
      <Spin spinning={carouselloading}>
        <div>
          <Carousel tittle={'Sweater'} data={carouseldata?.data} />
        </div>
        <HotProducts title={'HotProduct'} data={data?.data} />
        <HotProducts title={'Trending'} data={data?.data} />
        <PremiumProducts title={'Premium'} data={carouseldata?.data} />
        <RecentProducts title={'Recent Products'} data={data?.data} />
        <div>
          <LatestProduct title={'Recent Products'} data={data?.data} />
        </div>
              </Spin>
    </div>
  )
}

export default Dashboard