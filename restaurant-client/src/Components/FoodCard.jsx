import React from 'react'

export default function FoodCard({item}) {
    const {name, image, price, recipe}= item;
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={image}
            alt="Shoes"
            />
            <p className='bg-slate-900 text-white absolute right-3 top-3 p-2 rounded '>${price}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name} </h2>
          <p>
            {recipe}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
