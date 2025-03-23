import React from 'react'
import MenuItems from '../../Shared/MenuItems/MenuItems';

function MenuCategory({items}) {
    
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {items?.map((item) => (
          <MenuItems item={item} key={item._id} />
        ))}
      </div>
    </>
  );
}

export default MenuCategory
