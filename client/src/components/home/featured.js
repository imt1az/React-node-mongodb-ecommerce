import React from 'react';
import Carrousel from 'utls/Carrousel';


const Featured = () => {

    const carrouselItems = [
        {
            img:'/images/featured/featured_home.jpg',
            lineOne:'Fender',
            lineTwo:'Custom shop',
            lineTitle:'Show Now',
            linkTo:'/shop'
        },
        {
            img:'/images/featured/featured_home_2.jpg',
            lineOne:'B-Stock',
            lineTwo:'Awesome discounts',
            lineTitle:'View offers',
            linkTo:'/shop'
        }
    ]
    return (
        <div className=''>
           <Carrousel items={carrouselItems}></Carrousel>
        
        </div>
    );
};

export default Featured;