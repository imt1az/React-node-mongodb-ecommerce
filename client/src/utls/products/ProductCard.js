import React from 'react';
import Card from './Card';

const ProductCard = ({items,title,shop,grid}) => {

    const renderCard = ()=>(
        items ? 
        items.map((item)=>(
           
            <Card
            key={item._id}
            item={item}
            grid={grid}
            />
        ))
        : null
    )
    return (
        <div className={shop ? '' : ''}>
            <div className={shop ? 'container mx-auto' : 'container mx-auto'}>
                   {
                    title ? 
                    <div className="uppercase font-bold text-xl text-center my-28">{title}</div>
                    :'null'
                   } 
                   <div className=' mt-6 grid items-center   grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                      {renderCard()}
                   </div>
            </div>
            
        </div>
    );
};

export default ProductCard;