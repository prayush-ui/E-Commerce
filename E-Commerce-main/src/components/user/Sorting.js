import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Select, Skeleton } from 'antd';
import RecentProducts from './dashboard/RecentProducts';
import { fetchSortProducts } from '../../services/AllProduct';

const Sorting = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.sortproduct);
    const [pageSize, setPageSize] = useState(8); // Initial page size
    const [currentPage, setCurrentPage] = useState(1); // Initial current page

    React.useEffect(() => {
        dispatch(fetchSortProducts());
    }, [dispatch]);

    console.log("data", data?.data);

    const options = [
        {
            value: "desc",
            label: "Desc"
        },
        {
            value: "brand",
            label: "Brand"
        }
    ];

    const handleChange = (value, option) => {
        console.log('selected', value, option);
        dispatch(fetchSortProducts(value));
    };

    const onPageChange = (page, pageSize) => {
        console.log('page change:', page, pageSize);
        setCurrentPage(page);
    };

    const onShowSizeChange = (current, size) => {
        console.log('size change:', current, size);
        setPageSize(size);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedData = data?.data?.slice(startIndex, endIndex);

    return (
        <div>
            <Select
                style={{
                    width: '100%',
                }}
                onChange={handleChange}
                options={options}
                allowClear={true}
            />
            <Skeleton loading={loading}>
                <div>
                    <RecentProducts title={'HotProduct'} data={displayedData?.map((item) => ({
                        ...item,
                        qty: 1
                    }))} />
                </div>
            </Skeleton>
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                onChange={onPageChange}
                defaultCurrent={1}
                current={currentPage}
                pageSize={pageSize}
                total={data?.data?.length || 0} // Assuming data is an array with length property
            />
        </div>
    );
};

export default Sorting;
