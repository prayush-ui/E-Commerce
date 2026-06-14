import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        cssEase:"linear"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data?.map((item) => (
                    <div key={item.id} className='backdrop-opacity-100np backgr bg-slate-500'
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'repeat',
                            backgroundPosition: 'center',
                            minHeight: '250px',
                            minWidth:'500px',
                         }}>
                <img src={item.image} alt="no" className='w-[300px] h-[200px]' />
        </div>
    ))
}
            </Slider >
        </div >
    );
};

export default Carousel;