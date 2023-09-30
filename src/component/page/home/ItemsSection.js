import ItemCard from '@/component/core/itemCard';
import React from 'react';
const items=[{},{},{}]
const ItemsSection = () => {
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {items.map((item,index)=><ItemCard
            key={index}
            />)}
        </div>
    );
};

export default ItemsSection;