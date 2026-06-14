import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { fetchSearchProducts } from '../../services/AllProduct'
import { useDispatch, useSelector } from 'react-redux'
import { Rate, Skeleton } from 'antd'
const SearchProduct = () => {
    const params = useParams()
    const location = useLocation()
    console.log("params", params)
    const dispatch = useDispatch()
    const { data, loading } = useSelector((state) => state.searchdynamicproduct);
    React.useEffect(() => {
        dispatch(fetchSearchProducts(`${params.id}`))
    }, [params?.id])
    console.log("datadasaadah", data?.data)
    return (
        <Skeleton loading={loading}>
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
                </div>
                <div>
                    {data?.data?.brand}
                </div>
                <div>
                    {data?.data?.description}
                </div>
                <div>
                    <Rate allowHalf value={data?.data?.rating.rate} className="text-[red]" />
                </div>
            </div>
        </div>
        </Skeleton>
    )
}
export default SearchProduct